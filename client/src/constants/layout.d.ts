export declare const LAYOUT_CONSTANTS: {
    TYPOGRAPHY: {
        BODY_LINE_LENGTH: number;
        HEADING_LINE_LENGTH: number;
        MAX_LINE_LENGTH: number;
        MIN_LINE_LENGTH: number;
    };
    CONTAINER: {
        MAX_CONTENT_WIDTH: string;
        CONTENT_WIDTH: {
            NARROW: string;
            STANDARD: string;
            WIDE: string;
            FULL: string;
        };
        SM: string;
        MD: string;
        LG: string;
        XL: string;
        PADDING: {
            XS: {
                xs: number;
                sm: number;
            };
            SM: {
                xs: number;
                sm: number;
            };
            MD: {
                xs: number;
                sm: number;
            };
            LG: {
                xs: number;
                sm: number;
            };
        };
        LAYOUT: {
            CENTERED: {
                maxWidth: string;
                mx: string;
                px: {
                    xs: number;
                    sm: number;
                };
            };
            TWO_COLUMN: {
                maxWidth: string;
                mx: string;
                px: {
                    xs: number;
                    sm: number;
                };
            };
            FULL_WIDTH: {
                width: string;
                px: {
                    xs: number;
                    sm: number;
                    md: number;
                };
            };
        };
    };
    GRID: {
        SPACING: {
            XS: number;
            SM: number;
            MD: number;
            LG: number;
        };
        COLUMNS: {
            SINGLE: {
                xs: number;
            };
            DOUBLE: {
                xs: number;
                sm: number;
            };
            TRIPLE: {
                xs: number;
                sm: number;
                md: number;
            };
            QUADRUPLE: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
            };
            SEXTUPLE: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
            };
        };
    };
    CARD: {
        HEIGHT: {
            COMPACT: string;
            DEFAULT: string;
            FEATURED: string;
            TALL: string;
        };
        WIDTH: {
            COMPACT: string;
            DEFAULT: string;
            FEATURED: string;
            TALL: string;
        };
        CONTENT: {
            PADDING: number;
            TITLE_MARGIN: number;
            EXCERPT_MARGIN: number;
            FOOTER_MARGIN: number;
        };
        IMAGE: {
            ASPECT_RATIO: string;
            COMPACT_HEIGHT: number;
            DEFAULT_HEIGHT: number;
            FEATURED_HEIGHT: number;
        };
        STYLES: {
            BASE: {
                width: string;
                height: string;
                display: string;
                flexDirection: string;
                transition: string;
                '&:hover': {
                    transform: string;
                    boxShadow: string;
                };
            };
            GRID_ITEM: {
                display: string;
                flexDirection: string;
                height: string;
            };
        };
    };
    TEXT: {
        LINE_CLAMP: {
            TITLE: number;
            EXCERPT: number;
            DESCRIPTION: number;
            BODY: number;
        };
        VARIANTS: {
            TITLE: string;
            SUBTITLE: string;
            BODY: string;
            CAPTION: string;
        };
    };
    BREAKPOINTS: {
        MOBILE: string;
        TABLET: string;
        DESKTOP: string;
        LARGE: string;
        XLARGE: string;
    };
    SPACING: {
        XS: number;
        SM: number;
        MD: number;
        LG: number;
        XL: number;
        XXL: number;
    };
    ANIMATION: {
        DURATION: {
            FAST: string;
            NORMAL: string;
            SLOW: string;
        };
        EASING: {
            STANDARD: string;
            SMOOTH: string;
        };
    };
};
export declare const layoutUtils: {
    getOptimalWidth: (charCount: number) => string;
    getContainerMaxWidth: (size: "sm" | "md" | "lg" | "xl") => string;
    getGridColumns: (columns: number) => {
        xs: number;
    };
    getCardHeight: (variant: "compact" | "default" | "featured" | "tall") => string;
    getCardWidth: (variant: "compact" | "default" | "featured" | "tall") => string;
    getCardStyles: (variant: "compact" | "default" | "featured" | "tall") => {
        height: string;
        width: string;
        display: string;
        flexDirection: string;
        transition: string;
        '&:hover': {
            transform: string;
            boxShadow: string;
        };
    };
    getGridItemStyles: () => {
        display: string;
        flexDirection: string;
        height: string;
    };
    getImageHeight: (variant: "compact" | "default" | "featured") => number;
    getContentLayout: (type: "centered" | "two-column" | "full-width") => {
        maxWidth: string;
        mx: string;
        px: {
            xs: number;
            sm: number;
        };
    } | {
        maxWidth: string;
        mx: string;
        px: {
            xs: number;
            sm: number;
        };
    } | {
        width: string;
        px: {
            xs: number;
            sm: number;
            md: number;
        };
    };
    getContentWidth: (type: "narrow" | "standard" | "wide" | "full") => string;
};
export declare const typographyStyles: {
    optimalLineLength: {
        maxWidth: string;
        lineHeight: number;
    };
    title: {
        fontWeight: number;
        lineHeight: number;
        display: string;
        WebkitLineClamp: number;
        WebkitBoxOrient: "vertical";
        overflow: string;
    };
    excerpt: {
        lineHeight: number;
        display: string;
        WebkitLineClamp: number;
        WebkitBoxOrient: "vertical";
        overflow: string;
        color: string;
    };
    body: {
        lineHeight: number;
        maxWidth: string;
    };
    heading: {
        fontWeight: number;
        lineHeight: number;
        maxWidth: string;
    };
};
