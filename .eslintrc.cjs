// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // Se estiver usando TypeScript
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Remova esta linha se não estiver usando TypeScript
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, endOfLine: 'lf' },
    ],
    'react/react-in-jsx-scope': 'off', // Desliga a regra que exige React em escopo
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
