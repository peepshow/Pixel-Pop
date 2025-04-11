# PixelPop - Testing Documentation

This directory contains the test setup and configuration for the PixelPop application.

## Testing Infrastructure

The PixelPop application uses the following testing tools:

- [Vitest](https://vitest.dev/): Fast Vite-native testing framework with React support
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): DOM testing library for React components
- [Jest DOM](https://github.com/testing-library/jest-dom): Custom DOM element matchers for Jest
- [User Event](https://github.com/testing-library/user-event): Advanced user event simulation

## Test Organization

Tests are organized by feature areas, with test files co-located with the source code they test:

- `src/utils/__tests__/`: Tests for utility functions
- `src/hooks/__tests__/`: Tests for custom React hooks
- `src/components/__tests__/`: Tests for React components
- `src/core/__tests__/`: Tests for core application logic

## Running Tests

The following scripts are available for running tests:

- `npm test`: Run all tests once
- `npm run test:watch`: Run tests in watch mode (automatically re-run when files change)
- `npm run test:coverage`: Run tests with coverage reporting

## Writing Tests

### Test File Naming

Test files should follow the naming convention `*.test.js` or `*.test.jsx` for component tests.

### Test Structure

We use the AAA (Arrange, Act, Assert) pattern for organizing tests:

1. **Arrange**: Set up the test data and preconditions
2. **Act**: Perform the action being tested
3. **Assert**: Verify the expected outcome

### Testing Components

When testing components:
- Focus on testing behavior, not implementation details
- Use `render` from Testing Library to mount components
- Use Testing Library queries like `getByText` to find elements
- Use `fireEvent` or `userEvent` to simulate user interactions

Example:
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('should show proper content when clicked', () => {
    // Arrange
    render(<MyComponent />);
    
    // Act
    fireEvent.click(screen.getByText('Click me'));
    
    // Assert
    expect(screen.getByText('Content shown!')).toBeInTheDocument();
  });
});
```

### Testing Hooks

For testing custom hooks, use the `renderHook` function from React Testing Library:

```js
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '../useMyHook';

describe('useMyHook', () => {
  it('should update value when called', () => {
    // Arrange
    const { result } = renderHook(() => useMyHook());
    
    // Act
    act(() => {
      result.current.update('new value');
    });
    
    // Assert
    expect(result.current.value).toBe('new value');
  });
});
```

## Best Practices

1. **Test behavior, not implementation**: Focus on testing what the code does, not how it does it.
2. **Keep tests simple**: Each test should focus on one thing.
3. **Use test data helpers**: For complex test data, create helper functions.
4. **Don't test third-party libraries**: Focus on testing your own code.
5. **Mock dependencies**: Use `vi.mock()` to mock dependencies that are not under test.

## Code Coverage

Run `npm run test:coverage` to generate a coverage report. The report will show:
- Statement coverage: % of code statements executed during tests
- Branch coverage: % of code branches executed during tests
- Function coverage: % of functions called during tests
- Line coverage: % of code lines executed during tests

Current coverage goals:
- Working towards comprehensive test coverage of utils and core logic
- Testing key components and hooks
- Adding integration tests for critical user flows 