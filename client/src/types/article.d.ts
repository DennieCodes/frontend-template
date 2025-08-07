export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    readTime: number;
    category: string;
    tags: string[];
    imageUrl?: string;
    featured?: boolean;
}
export interface ArticleCardProps {
    article: Article;
    variant?: 'default' | 'featured' | 'compact';
    onClick?: (_selectedArticle: Article) => void;
}
export interface ArticleGridProps {
    articles: Article[];
    columns?: number;
    spacing?: number;
    variant?: 'default' | 'featured' | 'compact';
    onArticleClick?: (_selectedArticle: Article) => void;
}
export interface ArticleDirectoryProps {
    articles: Article[];
    title?: string;
    subtitle?: string;
    showFilters?: boolean;
    onArticleClick?: (_selectedArticle: Article) => void;
}
export interface ArticlePageProps {
    article: Article;
}
