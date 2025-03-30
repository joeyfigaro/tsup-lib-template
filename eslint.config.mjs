import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/*', '**/node_modules/*'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}', '.prettierrc.js'],
    plugins: {
      '@typescript-eslint': typescript,
      import: importPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^[_]*$', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'enum',
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
      'import/export': 'error',
      'import/named': 'off',
      'import/default': 'error',
      'import/namespace': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: ['external', 'builtin', 'internal'],
        },
      ],
    },
  },
];
