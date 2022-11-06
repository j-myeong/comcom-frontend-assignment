module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-else-return': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'arrow-body-style': 'off',
    'padded-blocks': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-newline': 'off',
    'no-alert': 'off',
  },
};
