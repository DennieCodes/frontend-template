interface UseTranslationExampleReturn {
    t: (key: string, options?: {
        values?: Record<string, any>;
        fallback?: string;
    }) => string;
    currentLanguage: string;
    availableLanguages: string[];
    changeLanguage: (newLanguage: string) => void;
    isReady: boolean;
}
/**
 * Custom hook that demonstrates how to use the useTranslation hook
 * with Material-UI elements and provides additional utilities
 */
export declare const useTranslationExample: () => UseTranslationExampleReturn;
/**
 * Utility function to get a translation with fallback
 */
export declare const getTranslation: (t: (key: string) => string, translationKey: string, fallback?: string) => string;
/**
 * Utility function to get a translation with interpolation values
 */
export declare const getTranslationWithValues: (t: (key: string, options?: any) => string, translationKey: string, values: Record<string, any>, fallback?: string) => string;
export default useTranslationExample;
