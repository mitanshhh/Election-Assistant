import React from 'react';
import { motion } from 'framer-motion';
import { DecisionNode } from '../types';
import { AnswerButton } from './AnswerButton';
import { HelpCircle } from 'lucide-react';

interface Props {
  node: DecisionNode;
  onAnswer: (answer: string) => void;
}

export function QuestionCard({ node, onAnswer }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <div className="flex items-start mb-8">
        <div className="p-3 bg-blue-50 rounded-2xl mr-4">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {node.question}
          </h2>
          {node.helpText && (
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              {node.helpText}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {node.answers.map((answer, index) => (
          <AnswerButton
            key={answer.label}
            label={answer.label}
            help={answer.help}
            onClick={() => onAnswer(answer.label)}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}
