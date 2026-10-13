import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'en-ur' | 'ur';

interface LanguageContextType {
  lang: LanguageMode;
  setLang: (lang: LanguageMode) => void;
  toggleLang: () => void;
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'fayjex_lang_mode';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'ur' ? 'ur' : 'en-ur';
  });

  const setLang = (newLang: LanguageMode) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'ur' ? 'en-ur' : 'ur');
  };

  const isUrdu = lang === 'ur';

  useEffect(() => {
    const root = document.documentElement;
    if (isUrdu) {
      root.setAttribute('lang', 'ur');
      root.setAttribute('dir', 'rtl');
      root.classList.add('font-nastaliq');
    } else {
      root.setAttribute('lang', 'en');
      root.removeAttribute('dir');
      root.classList.remove('font-nastaliq');
    }
  }, [isUrdu]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isUrdu }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
