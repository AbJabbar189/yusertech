import '@testing-library/jest-dom';

// Polyfill window.scrollTo if not defined in jsdom
if (!window.scrollTo) {
  window.scrollTo = () => {};
}

// Polyfill navigator.clipboard
if (!navigator.clipboard) {
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: async () => {},
    },
    writable: true,
  });
}
