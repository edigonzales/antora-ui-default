import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.extends('eslint-config-standard'),
  {
    rules: {
      'arrow-parens': ['error', 'always'],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      }],
      'no-restricted-properties': ['error', {
        property: 'substr',
        message: 'Use String#slice instead.',
      }],
      'max-len': [1, 120, 2],
      'spaced-comment': 'off',
      radix: ['error', 'always'],
    },
  },
]
