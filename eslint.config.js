import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import stylisticJs from '@stylistic/eslint-plugin-js'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

import fsd from '@feature-sliced/eslint-config'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  fsd,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/prefer-stateless-function": "error",
      "react/button-has-type": "error",
      "react/no-unused-prop-types": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-script-url": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/jsx-fragments": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/jsx-max-depth": ["error", { max: 5 }],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/no-typos": "warn",
      "react/display-name": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/prop-types": "off",
      "react/no-array-index-key": "warn",
      "import/no-default-export": "error",
      "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
          classPropertiesAllowed: true,
          disallowPrototype: true,
          returnStyle: "unchanged",
        },
      ],
      "arrow-body-style": "warn",
      "prefer-arrow-callback": [
        "warn",
        {
          allowNamedFunctions: true,
        },
      ],
    },
  },
]
