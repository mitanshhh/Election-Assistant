import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTree } from '../context/TreeContext';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { AlertCircle, CheckCircle2, ChevronLeft, RotateCcw, FileText, Loader2 } from 'lucide-react';
import { fetchGroqReason } from '../services/api';

export function DecisionTreePage() {
  const { currentNode, loading, error, selectAnswer, progress, reset, answers, goBack } = useTree();
  const [groqReason, setGroqReason] = React.useState<string | null>(null);
  const [isFetchingReason, setIsFetchingReason] = React.useState(false);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-red-50 rounded-3xl border border-red-100 max-w-md">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-6">{error}</p>
          <button onClick={() => window.location.reload()} className="px-6 py-2 bg-red-600 text-white rounded-xl font-bold">Try Again</button>
        </div>
      </div>
    );
  }

  const isEnd = currentNode?.id === 'end';
  const isIneligible = currentNode?.id === 'ineligible';

  React.useEffect(() => {
    if (isIneligible && !groqReason && !isFetchingReason) {
      setIsFetchingReason(true);
      fetchGroqReason(answers)
        .then(setGroqReason)
        .catch(err => {
          console.error(err);
          setGroqReason("We couldn't generate a specific reason at the moment. Please visit https://eci.gov.in for more details on voter eligibility in India.");
        })
        .finally(() => setIsFetchingReason(false));
    }
  }, [isIneligible, answers, groqReason, isFetchingReason]);

  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Are you Eligible?</h1>
        {/* Navigation Actions */}
        {!isEnd && !isIneligible && (
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={goBack}
              className="flex items-center text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <div className="flex-1 mx-8">
              <ProgressBar progress={progress} />
            </div>
            <button
              onClick={reset}
              className="flex items-center text-sm font-bold text-gray-400 hover:text-red-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </button>
          </div>
        )}

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {!isEnd && !isIneligible ? (
            <div key="questions">
              {currentNode && (
                <QuestionCard
                  key={currentNode.id}
                  node={currentNode}
                  onAnswer={selectAnswer}
                />
              )}
            </div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-10 rounded-[3rem] shadow-2xl shadow-gray-100 border text-center ${
                isIneligible ? 'bg-orange-50 border-orange-100' : 'bg-green-50 border-green-100'
              }`}
            >
              <div className={`w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center ${
                isIneligible ? 'bg-orange-600' : 'bg-green-600'
              }`}>
                {isIneligible ? (
                  <AlertCircle className="w-10 h-10 text-white" />
                ) : (
                  <CheckCircle2 className="w-10 h-10 text-white" />
                )}
              </div>

              <h2 className={`text-4xl font-extrabold mb-4 ${
                isIneligible ? 'text-orange-900' : 'text-green-900'
              }`}>
                {currentNode?.question}
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
                {currentNode?.helpText}
              </p>

              {isIneligible && (
                <div className="mb-10 p-6 bg-white/60 rounded-2xl border border-orange-200 text-left">
                  <h4 className="text-orange-900 font-bold mb-4 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    AI Eligibility Analysis:
                  </h4>
                  {isFetchingReason ? (
                    <div className="flex items-center text-orange-700">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing your responses based on Indian Electoral Laws...
                    </div>
                  ) : (
                    <div className="text-orange-800 text-sm whitespace-pre-wrap leading-relaxed">
                      {groqReason}
                    </div>
                  )}
                  <a 
                    href="https://voters.eci.gov.in/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-6 block w-full py-3 bg-orange-600 text-white text-center rounded-xl font-bold hover:bg-orange-700 transition-colors"
                  >
                    Visit Voter Service Portal
                  </a>
                </div>
              )}

              <button
                onClick={reset}
                className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-300"
              >
                Check Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
