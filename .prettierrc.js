module.exports = {
  printWidth: 80,
  tabWidth: 4,
  useTabs: false,
  singleQuote: true,
  bracketSameLine: true,
  overrides: [
    {
      files: ['*.js', '*.json'],
      options: {
        tabWidth: 2,
        trailingComma: 'es5',
      },
    },
  ],
};
