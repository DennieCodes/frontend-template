# Internationalization (i18n) Setup

This project uses `react-i18next` for multi-language support.

## Structure

```
src/i18n/
├── i18n.ts                 # Main i18n configuration
├── locales/
│   ├── en/
│   │   └── translation.json # English translations
│   └── es/
│       └── translation.json # Spanish translations
└── README.md               # This file
```

## Usage

### Basic Translation

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Typography>{t('common.home')}</Typography>
  );
};
```

### Translation with Interpolation

```tsx
const { t } = useTranslation();

// In translation.json: "minLength": "Must be at least {{min}} characters"
const message = t('validation.minLength', { values: { min: 8 } });
```

### Language Switcher Component

```tsx
import LanguageSwitcher from '../components/LanguageSwitcher';

// Select variant (default)
<LanguageSwitcher variant="select" size="medium" />

// Button variant
<LanguageSwitcher variant="buttons" />
```

### Custom Hook

```tsx
import { useTranslationExample } from '../hooks/useTranslationExample';

const MyComponent: React.FC = () => {
  const { t, currentLanguage, changeLanguage, isReady } = useTranslationExample();

  if (!isReady) return <div>Loading...</div>;

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage('es')}>Switch to Spanish</button>
    </div>
  );
};
```

## Adding New Languages

1. Create a new folder in `locales/` (e.g., `locales/fr/`)
2. Add `translation.json` with your translations
3. Update `i18n.ts` to include the new language:

```tsx
import frTranslation from './locales/fr/translation.json';

const resources: TranslationResources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  fr: { translation: frTranslation }, // Add this
};
```

4. Update the LanguageSwitcher component to include the new language option.

## Translation Keys Structure

The translation files are organized hierarchically:

```json
{
  "common": {
    "home": "Home",
    "account": "Account"
  },
  "navigation": {
    "dashboard": "Dashboard",
    "about": "About"
  },
  "forms": {
    "firstName": "First Name",
    "email": "Email"
  }
}
```

## Features

- **Automatic Language Detection**: Uses browser language and localStorage
- **Fallback Handling**: Missing keys fallback to the key itself
- **TypeScript Support**: Fully typed with proper interfaces
- **Material-UI Integration**: Components work seamlessly with MUI
- **Development Mode**: Debug logging in development environment
- **Persistent Language**: Language choice is saved in localStorage

## Best Practices

1. **Use descriptive keys**: `account.profileInfo` instead of `profile`
2. **Group related translations**: Keep related keys in the same namespace
3. **Use interpolation for dynamic values**: `{{min}}` instead of concatenation
4. **Provide fallbacks**: Always have a fallback for missing translations
5. **Test all languages**: Ensure all translations are complete and accurate