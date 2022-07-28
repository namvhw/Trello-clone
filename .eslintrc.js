module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',  
    project: ['./packages/*/tsconfig.json'],
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  env: {
    node: true,
    es2020: true,
  }
}
