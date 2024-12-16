'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="absolute my-auto right-2 md:right-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative px-0.5 md:px-1 bg-emerald-800 rounded-full shadow-lg">
        <motion.div
          className="absolute inset-1 w-[32px] md:w-[42px] h-[32px] md:h-[42px] bg-emerald-300 rounded-full"
          animate={{
            x: language === 'nb' ? 0 : 'calc(100% + 4px)',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 40 }}
        />
        <div className="relative flex gap-0.5 md:gap-1">
          <motion.button
            onClick={() => setLanguage('nb')}
            className={`p-2 md:p-3 text-base md:text-xl rounded-full transition-colors duration-300 z-10 ${
              language === 'nb' ? 'text-white' : 'text-emerald-900'
            }`}
            whileTap={{ scale: 0.9 }}
            title="Norsk"
          >
            🇳🇴
          </motion.button>
          <motion.button
            onClick={() => setLanguage('fr')}
            className={`p-2 md:p-3 text-base md:text-xl rounded-full transition-colors duration-300 z-10 ${
              language === 'fr' ? 'text-white' : 'text-emerald-900'
            }`}
            whileTap={{ scale: 0.9 }}
            title="Français"
          >
            🇫🇷
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;