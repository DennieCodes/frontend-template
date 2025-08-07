# Layout System & Design Patterns

This document outlines the consistent layout system and design patterns used throughout the application to ensure uniform spacing, typography, and responsive behavior.

## 📐 Layout Constants

### Typography Guidelines

The layout system follows established typography best practices:

- **Body Text**: 65-75 characters per line for optimal readability
- **Headings**: 40-60 characters per line for better scanning
- **Maximum Line Length**: 120 characters (absolute maximum)
- **Minimum Line Length**: 45 characters for readability

### Container Dimensions

```typescript
CONTAINER: {
  MAX_CONTENT_WIDTH: '65ch', // ~65 characters wide
  PADDING: {
    XS: { xs: 2, sm: 3 },
    SM: { xs: 3, sm: 4 },
    MD: { xs: 4, sm: 6 },
    LG: { xs: 6, sm: 8 },
  }
}
```

### Card Dimensions

Consistent card heights ensure uniform layouts:

```typescript
CARD: {
  HEIGHT: {
    COMPACT: '280px',
    DEFAULT: '400px',
    FEATURED: '500px',
    TALL: '600px',
  },
  IMAGE: {
    COMPACT_HEIGHT: 140,
    DEFAULT_HEIGHT: 200,
    FEATURED_HEIGHT: 250,
  }
}
```

### Grid System

Responsive grid configurations:

```typescript
GRID: {
  COLUMNS: {
    SINGLE: { xs: 12 },
    DOUBLE: { xs: 12, sm: 6 },
    TRIPLE: { xs: 12, sm: 6, md: 4 },
    QUADRUPLE: { xs: 12, sm: 6, md: 4, lg: 3 },
    SEXTUPLE: { xs: 12, sm: 6, md: 4, lg: 2 },
  }
}
```

## 🎨 Typography Styles

### Text Truncation

Consistent line clamping for different content types:

```typescript
TEXT: {
  LINE_CLAMP: {
    TITLE: 2,      // Article titles
    EXCERPT: 3,    // Article excerpts
    DESCRIPTION: 4, // Resource descriptions
    BODY: 6,       // Long-form content
  }
}
```

### Typography Variants

Predefined typography styles for consistent rendering:

```typescript
typographyStyles = {
  title: {
    fontWeight: 600,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  excerpt: {
    lineHeight: 1.5,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    color: 'text.secondary',
  },
  body: {
    lineHeight: 1.6,
    maxWidth: '70ch', // Optimal reading width
  },
  heading: {
    fontWeight: 700,
    lineHeight: 1.2,
    maxWidth: '50ch',
  }
}
```

## 📱 Responsive Breakpoints

Consistent breakpoint usage across components:

```typescript
BREAKPOINTS: {
  MOBILE: 'xs',    // < 600px
  TABLET: 'sm',    // 600px - 900px
  DESKTOP: 'md',   // 900px - 1200px
  LARGE: 'lg',     // 1200px - 1536px
  XLARGE: 'xl',    // > 1536px
}
```

## 🎯 Usage Guidelines

### 1. Container Usage

Always use the predefined container padding:

```tsx
<Container maxWidth="lg" sx={{ py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD }}>
  {/* Content */}
</Container>
```

### 2. Card Implementation

Use consistent card heights and spacing:

```tsx
<Card sx={{ height: layoutUtils.getCardHeight('default') }}>
  <CardContent sx={{ p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING }}>
    <Typography sx={{ ...typographyStyles.title }}>
      {title}
    </Typography>
    <Typography sx={{ ...typographyStyles.excerpt }}>
      {excerpt}
    </Typography>
  </CardContent>
</Card>
```

### 3. Grid Layouts

Use the utility function for responsive grids:

```tsx
<Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
  <Grid item {...layoutUtils.getGridColumns(3)}>
    {/* Grid item */}
  </Grid>
</Grid>
```

### 4. Typography Implementation

Apply typography styles consistently:

```tsx
// For headings
<Typography sx={{ ...typographyStyles.heading }}>
  {heading}
</Typography>

// For body text
<Typography sx={{ ...typographyStyles.body }}>
  {content}
</Typography>

// For excerpts with line clamping
<Typography sx={{ ...typographyStyles.excerpt }}>
  {excerpt}
</Typography>
```

## 🔧 Utility Functions

### Layout Utilities

```typescript
layoutUtils = {
  // Get optimal container width based on character count
  getOptimalWidth: (charCount: number): string,

  // Get responsive container max width
  getContainerMaxWidth: (size: 'sm' | 'md' | 'lg' | 'xl'): string,

  // Get grid columns based on screen size
  getGridColumns: (columns: number),

  // Get card height based on variant
  getCardHeight: (variant: 'compact' | 'default' | 'featured' | 'tall'): string,

  // Get image height based on card variant
  getImageHeight: (variant: 'compact' | 'default' | 'featured'): number,
}
```

## 📏 Spacing Scale

Consistent spacing using Material UI's 8px base unit:

```typescript
SPACING: {
  XS: 1,  // 8px
  SM: 2,  // 16px
  MD: 3,  // 24px
  LG: 4,  // 32px
  XL: 6,  // 48px
  XXL: 8, // 64px
}
```

## 🎭 Animation Settings

Consistent animation timing and easing:

```typescript
ANIMATION: {
  DURATION: {
    FAST: '0.2s',
    NORMAL: '0.3s',
    SLOW: '0.5s',
  },
  EASING: {
    STANDARD: 'ease',
    SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
```

## ✅ Best Practices

1. **Always use layout constants** instead of hardcoded values
2. **Apply typography styles** for consistent text rendering
3. **Use responsive breakpoints** for mobile-first design
4. **Maintain consistent spacing** using the spacing scale
5. **Apply proper line clamping** for content truncation
6. **Use utility functions** for common layout calculations

## 🔄 Migration Guide

When updating existing components:

1. Import layout constants: `import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../constants/layout'`
2. Replace hardcoded spacing with constants
3. Apply typography styles to text elements
4. Use utility functions for responsive behavior
5. Update card heights to use consistent dimensions

This ensures all components follow the same design patterns and maintain visual consistency across the application.