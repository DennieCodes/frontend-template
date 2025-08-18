import { Article } from '../../types/article';
import { BaseArticle } from '../../types/common';

export interface ArticleHeaderProps {
  article: BaseArticle;
  onBack?: () => void;
}

export interface ArticleMetaProps {
  article: Article;
}

export interface ArticleContentProps {
  content?: string;
  article?: BaseArticle;
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
  // Add any state management if needed in the future
}

export interface ArticlePageProps {
  article?: BaseArticle;
}
