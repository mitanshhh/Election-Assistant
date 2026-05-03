import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Props {
  label: string;
  help?: string;
  onClick: () => void;
  delay?: number;
}

export function AnswerButton({ label, help, onClick, delay = 0 }: Props) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ x: 10, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="w-full text-left p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
            {label}
          </div>
          {help && (
            <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
              {help}
            </div>
          )}
        </div>
        <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.button>
  );
}
