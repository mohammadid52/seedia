module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
