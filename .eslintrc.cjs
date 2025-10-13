module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'prettier',
  ],
  plugins: ['testing-library', 'jest-dom'],
};
