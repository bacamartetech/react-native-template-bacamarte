module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'jest/jest': 'off',
        'prettier/prettier': ['error', {
            'bracketSpacing': true,
            'jsxBracketSameLine': true,
            'singleQuote': true,
            'trailingComma': 'es5',
            'tabWidth': 4,
            'printWidth': 120
        }],
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'always'
        }],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'object-curly-spacing': ['error', 'always'],
        'react-native/no-inline-styles': 'off'
    }
};
