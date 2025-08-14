import { Article } from '../../types/article';
export interface ArticleHeaderProps {
    article: Article;
    onBack: () => void;
}
export interface ArticleMetaProps {
    article: Article;
}
export interface ArticleContentProps {
    content: string;
}
export interface ArticleSidebarProps {
    article: Article;
}
export interface ArticleTagsProps {
    tags: string[];
}
export interface ArticleNotFoundProps {
    onBackToArticles: () => void;
}
export interface ArticlePageState {
}
export interface ArticlePageProps {
}
