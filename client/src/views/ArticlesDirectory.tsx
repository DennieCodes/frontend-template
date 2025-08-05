import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleDirectory from '../components/ArticleDirectory';
import { Article } from '../types/article';

// Sample data for demonstration
const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a modern React application with TypeScript for better type safety and developer experience.',
    content: `React and TypeScript are a powerful combination for building modern web applications. TypeScript provides static type checking that helps catch errors early in development and improves code maintainability.

In this article, we'll explore how to set up a new React project with TypeScript, configure the development environment, and start building components with proper type definitions.

## Why TypeScript with React?

TypeScript offers several benefits when working with React:

- **Better IDE Support**: Enhanced autocomplete and error detection
- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Documentation**: Types serve as living documentation
- **Refactoring Confidence**: Safe refactoring with type checking

## Setting Up Your Project

To get started, you can use Create React App with TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

This will create a new React project with TypeScript already configured. The project structure will include:

- \`tsconfig.json\` for TypeScript configuration
- Type definitions for React and other libraries
- Pre-configured build tools

## Creating Your First Component

Here's an example of a simple React component with TypeScript:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  );
};
\`\`\`

## Best Practices

When working with React and TypeScript, consider these best practices:

1. **Use interfaces for props**: Define clear interfaces for component props
2. **Leverage generics**: Use generics for reusable components
3. **Type your state**: Define proper types for component state
4. **Use utility types**: Take advantage of TypeScript utility types like Partial, Pick, etc.

## Conclusion

TypeScript and React work together beautifully to create more robust and maintainable applications. The initial setup might take a bit more time, but the benefits in terms of developer experience and code quality are well worth it.

Start with small components and gradually add types to your existing codebase. The TypeScript compiler will help you identify areas that need attention.`,
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    category: 'Development',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies that will shape web development in the coming year.',
    content: `The web development landscape is constantly evolving, with new technologies and frameworks emerging regularly. As we look ahead to 2024, several trends are poised to reshape how we build and deploy web applications.

## AI-Powered Development Tools

Artificial intelligence is becoming increasingly integrated into development workflows. From code completion to automated testing, AI tools are helping developers be more productive than ever.

Key developments include:
- Advanced code completion and suggestions
- Automated code review and optimization
- AI-powered testing and debugging
- Natural language to code conversion

## Web Components and Micro Frontends

The adoption of Web Components continues to grow, enabling better component reusability across different frameworks and applications.

## Performance and Core Web Vitals

Performance remains a top priority, with Google's Core Web Vitals becoming increasingly important for SEO and user experience.

## Conclusion

The future of web development is bright, with exciting new technologies on the horizon. Stay curious and keep learning!`,
    author: 'Michael Chen',
    publishedAt: '2024-01-10T14:30:00Z',
    readTime: 6,
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Performance', 'Trends'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Building Scalable CSS Architecture',
    excerpt: 'Learn how to create maintainable and scalable CSS architectures for large-scale projects.',
    content: `CSS architecture is crucial for maintaining large-scale projects. A well-structured CSS architecture can make the difference between a maintainable codebase and a tangled mess of styles.

## CSS Architecture Principles

### 1. Separation of Concerns
Keep your CSS organized by separating layout, components, and utilities.

### 2. Scalability
Design your CSS to grow with your project without becoming unwieldy.

### 3. Maintainability
Write CSS that's easy to understand and modify.

## Popular CSS Methodologies

### BEM (Block Element Modifier)
BEM provides a clear naming convention that makes CSS more readable and maintainable.

### CSS Modules
CSS Modules provide local scoping for CSS classes, preventing naming conflicts.

### Utility-First CSS
Frameworks like Tailwind CSS promote utility-first approaches that can speed up development.

## Best Practices

1. Use consistent naming conventions
2. Keep specificity low
3. Document your architecture
4. Use CSS custom properties for theming
5. Implement a design system

## Conclusion

Good CSS architecture is an investment that pays off as your project grows.`,
    author: 'Emily Rodriguez',
    publishedAt: '2024-01-08T09:15:00Z',
    readTime: 7,
    category: 'Design',
    tags: ['CSS', 'Architecture', 'Design Systems', 'Frontend'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Introduction to GraphQL: A Modern API Approach',
    excerpt: 'Discover how GraphQL is revolutionizing API design and data fetching in modern applications.',
    content: `GraphQL has emerged as a powerful alternative to REST APIs, offering more flexibility and efficiency in data fetching. This query language for APIs was developed by Facebook and has gained widespread adoption.

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries against your data. It provides a complete description of the data in your API and gives clients the power to ask for exactly what they need.

## Key Benefits

### 1. Efficient Data Fetching
Clients can request exactly the data they need, reducing over-fetching and under-fetching.

### 2. Strong Typing
GraphQL schemas provide a clear contract between client and server.

### 3. Real-time Updates
Subscriptions allow for real-time data updates.

### 4. Single Endpoint
All data is available through a single endpoint, simplifying client development.

## Getting Started

To implement GraphQL in your project:

1. Set up a GraphQL server
2. Define your schema
3. Implement resolvers
4. Connect your client

## Conclusion

GraphQL represents a significant evolution in API design, offering developers more control and efficiency.`,
    author: 'David Kim',
    publishedAt: '2024-01-05T16:45:00Z',
    readTime: 9,
    category: 'Backend',
    tags: ['GraphQL', 'API', 'Backend', 'Data'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Mastering JavaScript Promises and Async/Await',
    excerpt: 'Deep dive into asynchronous JavaScript programming with promises and async/await patterns.',
    content: `Asynchronous programming is fundamental to modern JavaScript development. Understanding promises and async/await is crucial for building responsive applications.

## Understanding Promises

Promises represent the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callback-based asynchronous code.

### Promise States
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

## Async/Await Syntax

Async/await provides a more readable way to work with promises:

\`\`\`javascript
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}
\`\`\`

## Best Practices

1. Always handle errors with try/catch
2. Use Promise.all for parallel operations
3. Avoid mixing callbacks with promises
4. Keep async functions focused and small

## Common Patterns

### Parallel Execution
\`\`\`javascript
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
\`\`\`

### Sequential Execution
\`\`\`javascript
const user = await fetchUser();
const posts = await fetchUserPosts(user.id);
\`\`\`

## Conclusion

Mastering asynchronous JavaScript is essential for modern web development.`,
    author: 'Lisa Wang',
    publishedAt: '2024-01-03T11:20:00Z',
    readTime: 10,
    category: 'Development',
    tags: ['JavaScript', 'Async', 'Promises', 'Programming'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Designing for Accessibility: A Comprehensive Guide',
    excerpt: 'Learn how to create inclusive web experiences that work for users of all abilities.',
    content: `Web accessibility is not just a legal requirement—it's a fundamental aspect of good design. Creating accessible websites ensures that all users, regardless of their abilities, can access and use your content effectively.

## What is Web Accessibility?

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. This includes people with:

- Visual impairments
- Hearing impairments
- Motor impairments
- Cognitive impairments

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible:

### Perceivable
- Provide text alternatives for non-text content
- Create content that can be presented in different ways
- Make it easier for users to see and hear content

### Operable
- Make all functionality available from a keyboard
- Give users enough time to read and use content
- Do not design content in a way that is known to cause seizures

### Understandable
- Make text readable and understandable
- Make web pages appear and operate in predictable ways
- Help users avoid and correct mistakes

### Robust
- Maximize compatibility with current and future user tools

## Implementation Tips

1. Use semantic HTML elements
2. Provide alt text for images
3. Ensure proper color contrast
4. Make forms accessible
5. Test with screen readers

## Conclusion

Accessibility should be considered from the beginning of any web project, not as an afterthought.`,
    author: 'Alex Thompson',
    publishedAt: '2024-01-01T08:00:00Z',
    readTime: 12,
    category: 'Design',
    tags: ['Accessibility', 'UX', 'Design', 'Inclusive Design'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
  },
];

const ArticlesDirectory: React.FC = () => {
  const navigate = useNavigate();

  const handleArticleClick = (article: Article) => {
    navigate(`/articles/${article.id}`);
  };

  return (
    <ArticleDirectory
      articles={sampleArticles}
      title="Articles"
      subtitle="Discover our latest articles and insights on web development, design, and technology"
      showFilters={true}
      onArticleClick={handleArticleClick}
    />
  );
};

export default ArticlesDirectory;