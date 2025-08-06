import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface UseTranslationExampleReturn {
  t: (key: string, options?: { values?: Record<string, any>; fallback?: string }) => string;
  currentLanguage: string;
  availableLanguages: string[];
  changeLanguage: (newLanguage: string) => void;
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

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
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
  t: (key: string) => string,
  translationKey: string,
  fallback?: string
): string => {
  const translation = t(translationKey);
  return translation === translationKey ? (fallback || translationKey) : translation;
};

/**
 * Utility function to get a translation with interpolation values
 */
export const getTranslationWithValues = (
  t: (key: string, options?: any) => string,
  translationKey: string,
  values: Record<string, any>,
  fallback?: string
): string => {
  const translation = t(translationKey, { values });
  return translation === translationKey ? (fallback || translationKey) : translation;
};

export default useTranslationExample;