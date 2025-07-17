# Birthday Tracker Project Guidelines

## Table of Contents
- [Code Style](#code-style)
- [TypeScript Best Practices](#typescript-best-practices)
- [React Component Guidelines](#react-component-guidelines)
- [State Management](#state-management)
- [Database Operations](#database-operations)
- [Authentication](#authentication)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)
- [Accessibility](#accessibility)
- [Git Workflow](#git-workflow)
- [Deployment](#deployment)

## Code Style

### Formatting
- Use 2 spaces for indentation
- Maximum line length: 100 characters
- Use LF line endings
- Use trailing commas in objects and arrays (ES5 style)
- Always use semicolons
- Use single quotes for strings, double quotes for JSX attributes
- Use consistent spacing inside brackets and braces
- Always use parentheses around arrow function parameters

### Naming Conventions
- Use PascalCase for React components
- Use camelCase for variables, functions, and props
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that explain purpose

### File Organization
- Maximum 500 lines per file
- Follow component structure: imports, types, constants, component, styles, exports
- Group imports by: built-in, external, internal, relative (parent/sibling/index)
- Add newlines between import groups
- Alphabetize imports within groups

### Generated Code
- Do not add comments to generated code
- Do not modify generated code manually

## TypeScript Best Practices
- Enable strict null checks
- No implicit any types
- No unused local variables or parameters
- Define explicit return types for functions
- Use interfaces for object shapes
- Use type aliases for union types
- Use Zod for runtime validation

## React Component Guidelines
- Prefer functional components with hooks
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Limit JSX nesting to 5 levels deep
- Use React Server Components where appropriate
- Implement proper error boundaries
- Memoize expensive calculations and callbacks

## State Management
- Use React's built-in state management (useState, useReducer) for simple state
- Consider context API for shared state
- Implement proper data fetching patterns
- Use server actions for mutations

## Database Operations
- Use Drizzle ORM for database interactions
- Implement proper error handling for database operations
- Use transactions for related operations
- Validate input data before database operations
- Implement proper pagination for large datasets

## Authentication
- Use Clerk for authentication
- Implement proper authorization checks
- Protect sensitive routes and API endpoints
- Handle authentication errors gracefully

## Testing
- Write unit tests for utility functions
- Write integration tests for complex components
- Test happy paths and edge cases
- Mock external dependencies

## Performance Optimization
- Implement proper code splitting
- Optimize images and assets
- Use proper caching strategies
- Minimize unnecessary re-renders
- Implement proper loading states

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers

## Git Workflow
- Use descriptive commit messages
- Create feature branches for new features
- Submit pull requests for code review
- Keep pull requests focused and small
- Squash commits before merging

## Deployment
- Test changes in development environment before deployment
- Use CI/CD pipeline for automated testing and deployment
- Monitor application performance after deployment
- Implement proper error logging and monitoring
