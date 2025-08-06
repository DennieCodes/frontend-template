import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface TranslationExampleProps {
  namespace?: string;
  key: string;
  values?: Record<string, any>;
  fallback?: string;
}

interface UseTranslationExampleReturn {
  t: (key: string, options?: { values?: Record<string, any>; fallback?: string }) => string;
  currentLanguage: string;
  availableLanguages: string[];
  changeLanguage: (language: string) => void;
  isReady: boolean;
}

/**
 * Custom hook that demonstrates how to use the useTranslation hook
 * with Material-UI elements and provides additional utilities
 */
export const useTranslationExample = (): UseTranslationExampleReturn => {
  const { t, i18n } = useTranslation();

  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);

  const availableLanguages = useMemo(() => {
    return Object.keys(i18n.options.resources || {});
  }, [i18n.options.resources]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const isReady = useMemo(() => i18n.isInitialized, [i18n.isInitialized]);

  return {
    t,
    currentLanguage,
    availableLanguages,
    changeLanguage,
    isReady,
  };
};

/**
 * Utility function to get a translation with fallback
 */
export const getTranslation = (
  t: (key: string, options?: any) => string,
  key: string,
  fallback?: string
): string => {
  const translation = t(key);
  return translation === key ? (fallback || key) : translation;
};

/**
 * Utility function to get a translation with interpolation values
 */
export const getTranslationWithValues = (
  t: (key: string, options?: any) => string,
  key: string,
  values: Record<string, any>,
  fallback?: string
): string => {
  const translation = t(key, { values });
  return translation === key ? (fallback || key) : translation;
};

export default useTranslationExample;