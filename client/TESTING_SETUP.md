# Testing Setup Guide

This document explains the testing configuration for the frontend template.

## Current Setup

### Test Configuration
- **Jest** as the test runner
- **React Testing Library** for component testing
- **jsdom** as the test environment
- **Babel** for TypeScript/JSX transformation

### Coverage Thresholds
The test coverage thresholds are currently set to **0%** for template purposes:

```javascript
// jest.config.ts
coverageThreshold: {
  global: {
    branches: 0,
    functions: 0,
    lines: 0,
    statements: 0,
  },
}
```

## Available Tests

### Current Test Files
- `src/tests/HomePage.test.tsx` - Simple test for the HomePage component
- `src/tests/Header.test.tsx` - Basic test for the Header component

### Test Commands
```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:ci       # Run tests with coverage (CI mode)
```

## For Template Users

### ⚠️ Important: Update Coverage Thresholds
When implementing your actual project, you should update the coverage thresholds in `jest.config.ts` to your desired levels:

```javascript
coverageThreshold: {
  global: {
    branches: 80,    // Recommended: 80% or higher
    functions: 80,   // Recommended: 80% or higher
    lines: 80,       // Recommended: 80% or higher
    statements: 80,  // Recommended: 80% or higher
  },
}
```

### Adding New Tests
1. Create test files with `.test.tsx` or `.test.ts` extension
2. Place them in the `src/tests/` directory or alongside the components
3. Follow the existing test patterns for consistency

### Test Best Practices
- Use React Testing Library for component testing
- Mock external dependencies when needed
- Keep tests simple and focused
- Test user interactions, not implementation details
- Use descriptive test names

### Example Test Structure
```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import YourComponent from '../path/to/YourComponent';

describe('YourComponent', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <YourComponent />
      </MemoryRouter>
    );

    expect(screen.getByTestId('your-component')).toBeInTheDocument();
  });
});
```

## Troubleshooting

### Common Issues
1. **Babel Configuration**: Ensure `babel.config.cjs` uses CommonJS syntax
2. **Redux Dependencies**: Mock Redux components or wrap with Provider
3. **Router Dependencies**: Use `MemoryRouter` for component testing
4. **Material-UI**: Mock theme providers if needed

### Mocking Strategies
- Mock complex dependencies to keep tests simple
- Use `jest.mock()` for external libraries
- Create simple mock components for testing

## CI/CD Integration

The current setup is designed to work with CI/CD pipelines:
- Tests run in CI mode with `npm run test:ci`
- Coverage reporting is included
- Exit codes are properly set for pipeline integration

---

**Note**: This template uses simplified tests to ensure they pass out of the box. Replace these with comprehensive tests for your actual implementation.
