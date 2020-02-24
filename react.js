module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        commonjs: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react',
        'react-app',
    ],
    rules: {
        'react/jsx-curly-brace-presence': [1, 'never'],
        'react/boolean-prop-naming': [2, { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
        'react/button-has-type': 2,
        'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
        'react/no-array-index-key': 2,
        'react/no-danger': 2,
        'react/jsx-curly-spacing': [1, { when: 'never', children: true }],
        'react/jsx-filename-extension': 2,
        'react/jsx-fragments': 1,
        'react/jsx-handler-names': [2, { checkLocalVariables: true }],
        'react/jsx-indent': [1, 4, { checkAttributes: true }],
        'react/jsx-indent-props': 1,
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [2, { when: 'always', maximum: 3 }],
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-useless-fragment': 1,
        'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
        'react/jsx-props-no-multi-spaces': 1,
        'react/jsx-sort-props': [1, { shorthandFirst: true, callbacksLast: true }],
        'react/jsx-tag-spacing': [1, {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }],
        'react/jsx-wrap-multilines': [1, {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line'
        }],
        'react/jsx-boolean-value': [1, 'never'],
        'react/jsx-closing-bracket-location': 1,
    }
}