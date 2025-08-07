// Layout constants for consistent spacing and typography
export const LAYOUT_CONSTANTS = {
  // Typography line lengths (characters per line for optimal readability)
  TYPOGRAPHY: {
    // Optimal line length for body text (65-75 characters)
    BODY_LINE_LENGTH: 70,
    // Optimal line length for headings (40-60 characters)
    HEADING_LINE_LENGTH: 50,
    // Maximum line length for any text
    MAX_LINE_LENGTH: 120,
    // Minimum line length for readability
    MIN_LINE_LENGTH: 45,
  },

  // Container widths and spacing
  CONTAINER: {
    // Maximum content width for optimal readability
    MAX_CONTENT_WIDTH: '65ch', // Approximately 65 characters wide
    // Content width constraints for different layouts
    CONTENT_WIDTH: {
      NARROW: '45ch',    // For focused reading (45-50 characters)
      STANDARD: '65ch',  // For general content (65-70 characters)
      WIDE: '85ch',      // For wide layouts (85-90 characters)
      FULL: '100%',      // For full-width layouts
    },
    // Standard container max widths
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    // Responsive container padding
    PADDING: {
      XS: { xs: 2, sm: 3 },
      SM: { xs: 3, sm: 4 },
      MD: { xs: 4, sm: 6 },
      LG: { xs: 6, sm: 8 },
    },
    // Content layout configurations
    LAYOUT: {
      // Centered content with whitespace
      CENTERED: {
        maxWidth: '65ch',
        mx: 'auto',
        px: { xs: 2, sm: 3 },
      },
      // Two-column layout with sidebar
      TWO_COLUMN: {
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 3 },
      },
      // Full-width with constrained content
      FULL_WIDTH: {
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
      },
    },
  },

  // Grid spacing and breakpoints
  GRID: {
    // Standard grid spacing
    SPACING: {
      XS: 1,
      SM: 2,
      MD: 3,
      LG: 4,
    },
    // Responsive column configurations
    COLUMNS: {
      // Single column layout
      SINGLE: { xs: 12 },
      // Two column layout
      DOUBLE: { xs: 12, sm: 6 },
      // Three column layout (most common)
      TRIPLE: { xs: 12, sm: 6, md: 4 },
      // Four column layout
      QUADRUPLE: { xs: 12, sm: 6, md: 4, lg: 3 },
      // Six column layout
      SEXTUPLE: { xs: 12, sm: 6, md: 4, lg: 2 },
    },
  },

  // Card dimensions and spacing
  CARD: {
    // Standard card heights
    HEIGHT: {
      COMPACT: '280px',
      DEFAULT: '400px',
      FEATURED: '500px',
      TALL: '600px',
    },
    // Card widths for consistent sizing
    WIDTH: {
      COMPACT: '100%',
      DEFAULT: '100%',
      FEATURED: '100%',
      TALL: '100%',
    },
    // Card content spacing
    CONTENT: {
      PADDING: 2,
      TITLE_MARGIN: 1,
      EXCERPT_MARGIN: 2,
      FOOTER_MARGIN: 1,
    },
    // Image aspect ratios
    IMAGE: {
      ASPECT_RATIO: '16/9',
      COMPACT_HEIGHT: 140,
      DEFAULT_HEIGHT: 200,
      FEATURED_HEIGHT: 250,
    },
    // Card styling for consistent appearance
    STYLES: {
      // Base card styles for consistent width and appearance
      BASE: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      },
      // Grid item styles to ensure consistent sizing
      GRID_ITEM: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
    },
  },

  // Text truncation and line clamping
  TEXT: {
    // Line clamp settings for different text types
    LINE_CLAMP: {
      TITLE: 2,
      EXCERPT: 3,
      DESCRIPTION: 4,
      BODY: 6,
    },
    // Typography variants for consistent sizing
    VARIANTS: {
      TITLE: 'h6',
      SUBTITLE: 'body1',
      BODY: 'body2',
      CAPTION: 'caption',
    },
  },

  // Responsive breakpoints for consistent behavior
  BREAKPOINTS: {
    MOBILE: 'xs',
    TABLET: 'sm',
    DESKTOP: 'md',
    LARGE: 'lg',
    XLARGE: 'xl',
  },

  // Spacing scale (based on Material UI's spacing system)
  SPACING: {
    XS: 1,
    SM: 2,
    MD: 3,
    LG: 4,
    XL: 6,
    XXL: 8,
  },

  // Animation and transition settings
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
  },
};

// Utility functions for layout calculations
export const layoutUtils = {
  // Calculate optimal container width based on character count
  getOptimalWidth: (charCount: number): string => {
    const avgCharWidth = 0.6; // Average character width in em
    const width = charCount * avgCharWidth;
    return `${Math.min(Math.max(width, 20), 80)}em`;
  },

  // Get responsive container max width
  getContainerMaxWidth: (size: 'sm' | 'md' | 'lg' | 'xl'): string => {
    const maxWidths = {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    };
    return maxWidths[size];
  },

  // Get grid columns based on screen size
  getGridColumns: (columns: number) => {
    const columnConfigs = {
      1: LAYOUT_CONSTANTS.GRID.COLUMNS.SINGLE,
      2: LAYOUT_CONSTANTS.GRID.COLUMNS.DOUBLE,
      3: LAYOUT_CONSTANTS.GRID.COLUMNS.TRIPLE,
      4: LAYOUT_CONSTANTS.GRID.COLUMNS.QUADRUPLE,
      6: LAYOUT_CONSTANTS.GRID.COLUMNS.SEXTUPLE,
    };
    return columnConfigs[columns as keyof typeof columnConfigs] || LAYOUT_CONSTANTS.GRID.COLUMNS.TRIPLE;
  },

  // Get card height based on variant
  getCardHeight: (variant: 'compact' | 'default' | 'featured' | 'tall'): string => {
    const heights = {
      compact: LAYOUT_CONSTANTS.CARD.HEIGHT.COMPACT,
      default: LAYOUT_CONSTANTS.CARD.HEIGHT.DEFAULT,
      featured: LAYOUT_CONSTANTS.CARD.HEIGHT.FEATURED,
      tall: LAYOUT_CONSTANTS.CARD.HEIGHT.TALL,
    };
    return heights[variant];
  },

  // Get card width based on variant
  getCardWidth: (variant: 'compact' | 'default' | 'featured' | 'tall'): string => {
    const widths = {
      compact: LAYOUT_CONSTANTS.CARD.WIDTH.COMPACT,
      default: LAYOUT_CONSTANTS.CARD.WIDTH.DEFAULT,
      featured: LAYOUT_CONSTANTS.CARD.WIDTH.FEATURED,
      tall: LAYOUT_CONSTANTS.CARD.WIDTH.TALL,
    };
    return widths[variant];
  },

  // Get base card styles for consistent appearance
  getCardStyles: (variant: 'compact' | 'default' | 'featured' | 'tall') => {
    return {
      ...LAYOUT_CONSTANTS.CARD.STYLES.BASE,
      height: layoutUtils.getCardHeight(variant),
      width: layoutUtils.getCardWidth(variant),
    };
  },

  // Get grid item styles for consistent sizing
  getGridItemStyles: () => {
    return LAYOUT_CONSTANTS.CARD.STYLES.GRID_ITEM;
  },

  // Get image height based on card variant
  getImageHeight: (variant: 'compact' | 'default' | 'featured'): number => {
    const heights = {
      compact: LAYOUT_CONSTANTS.CARD.IMAGE.COMPACT_HEIGHT,
      default: LAYOUT_CONSTANTS.CARD.IMAGE.DEFAULT_HEIGHT,
      featured: LAYOUT_CONSTANTS.CARD.IMAGE.FEATURED_HEIGHT,
    };
    return heights[variant];
  },

  // Get content layout configuration
  getContentLayout: (type: 'centered' | 'two-column' | 'full-width') => {
    const layouts = {
      centered: LAYOUT_CONSTANTS.CONTAINER.LAYOUT.CENTERED,
      'two-column': LAYOUT_CONSTANTS.CONTAINER.LAYOUT.TWO_COLUMN,
      'full-width': LAYOUT_CONSTANTS.CONTAINER.LAYOUT.FULL_WIDTH,
    };
    return layouts[type];
  },

  // Get content width constraint
  getContentWidth: (type: 'narrow' | 'standard' | 'wide' | 'full') => {
    const widths = {
      narrow: LAYOUT_CONSTANTS.CONTAINER.CONTENT_WIDTH.NARROW,
      standard: LAYOUT_CONSTANTS.CONTAINER.CONTENT_WIDTH.STANDARD,
      wide: LAYOUT_CONSTANTS.CONTAINER.CONTENT_WIDTH.WIDE,
      full: LAYOUT_CONSTANTS.CONTAINER.CONTENT_WIDTH.FULL,
    };
    return widths[type];
  },
};

// Typography styles for consistent text rendering
export const typographyStyles = {
  // Optimal line length styles
  optimalLineLength: {
    maxWidth: LAYOUT_CONSTANTS.TYPOGRAPHY.MAX_LINE_LENGTH + 'ch',
    lineHeight: 1.6,
  },

  // Title styles with proper line clamping
  title: {
    fontWeight: 600,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: LAYOUT_CONSTANTS.TEXT.LINE_CLAMP.TITLE,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
  },

  // Excerpt styles with proper line clamping
  excerpt: {
    lineHeight: 1.5,
    display: '-webkit-box',
    WebkitLineClamp: LAYOUT_CONSTANTS.TEXT.LINE_CLAMP.EXCERPT,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
    color: 'text.secondary',
  },

  // Body text styles
  body: {
    lineHeight: 1.6,
    maxWidth: LAYOUT_CONSTANTS.TYPOGRAPHY.BODY_LINE_LENGTH + 'ch',
  },

  // Heading styles
  heading: {
    fontWeight: 700,
    lineHeight: 1.2,
    maxWidth: LAYOUT_CONSTANTS.TYPOGRAPHY.HEADING_LINE_LENGTH + 'ch',
  },
};