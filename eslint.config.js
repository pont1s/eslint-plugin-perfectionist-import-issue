import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    yaml: true,
    jsonc: true,
    typescript: true,

    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },
  {
    rules: {
      'import/order': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          'type': 'line-length',
          'groups': [
            ['builtin', 'external'],
            'internal',
            'stores',
            'services',
            'validators',
            'utils',
            'logics',
            'composable',
            'ui',
            'components',
            'pages',
            'widgets',
            'assets',
            'parent',
            'sibling',
            'side-effect',
            'index',
            'style',
            'object',
            'unknown',
          ],
          'custom-groups': {
            value: {
              stores: ['~/stores/**'],
              services: ['~/services/**'],
              validators: ['~/validators/**'],
              utils: ['~/utils/**'],
              logics: ['~/logics/**'],
              composable: ['~/composable/**'],
              ui: ['~/ui/**'],
              components: ['~/components/**'],
              pages: ['~/pages/**'],
              widgets: ['~/widgets/**'],
              assets: ['~/assets/**'],
            },
          },
          'newlines-between': 'always',
          'internal-pattern': [
            '~/**',
          ],
        },
      ],
    },
  },
)
