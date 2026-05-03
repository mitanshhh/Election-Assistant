import React, { createContext, useContext, useState, useEffect } from 'react';
import { TreeData, DecisionNode } from '../types';
import { fetchTree } from '../services/api';

interface TreeContextType {
  tree: TreeData | null;
  currentNode: DecisionNode | null;
  answers: { [key: string]: string };
  progress: number;
  loading: boolean;
  error: string | null;
  selectAnswer: (answer: string) => void;
  goBack: () => void;
  reset: () => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export function TreeProvider({ children }: { children: React.ReactNode }) {
  const [tree, setTree] = useState<TreeData | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(['start']);

  useEffect(() => {
    let mounted = true;

    fetchTree()
      .then(data => {
        if (mounted) {
          setTree(data);
          if (data.startNode) {
            setCurrentNodeId(data.startNode);
            setHistory([data.startNode]);
          }
          setLoading(false);
        }
      })
      .catch(err => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const currentNode = tree?.nodes.find(n => n.id === currentNodeId) || null;
  const totalNodes = tree?.nodes.length || 0;
  const progress = totalNodes > 0 
    ? Math.round((Object.keys(answers).length / totalNodes) * 100) 
    : 0;

  const selectAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentNodeId]: answer }));
    
    const selectedOption = currentNode?.answers.find(a => a.label === answer);
    if (selectedOption) {
      setHistory(prev => [...prev, selectedOption.nextNode]);
      setCurrentNodeId(selectedOption.nextNode);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      const previousNodeId = newHistory[newHistory.length - 1];
      setCurrentNodeId(previousNodeId);
      
      // Remove the last answer
      setAnswers(prev => {
        const updated = { ...prev };
        delete updated[previousNodeId];
        return updated;
      });
    }
  };

  const reset = () => {
    const start = tree?.startNode || 'start';
    setCurrentNodeId(start);
    setAnswers({});
    setHistory([start]);
  };

  return (
    <TreeContext.Provider value={{
      tree,
      currentNode,
      answers,
      progress,
      loading,
      error,
      selectAnswer,
      goBack,
      reset,
    }}>
      {children}
    </TreeContext.Provider>
  );
}

export function useTree() {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTree must be used within TreeProvider');
  }
  return context;
}
