import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="h-full bg-green-500"
        />
      </div>
    </div>
  );
}
