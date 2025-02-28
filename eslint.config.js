import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


/** @type {import('eslint').Linter.Config[]} */
export default [
	{files: ['**/*.{js,mjs,cjs,ts}']},
	{languageOptions: { globals: globals.browser }},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,

	{
		ignores: ['node_modules', 'dist'],
		rules: {
			'quotes': ['error', 'single'],
			'semi': ['error', 'never'],
			'indent': ['error', 'tab'],
			'eol-last': ['error', 'always'],
			'arrow-body-style': ['error', 'as-needed'],
			'prefer-arrow-callback': 'error',
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-extra-semi': 'warn',
			'no-unreachable': 'warn',
			'no-constant-condition': 'warn',
			'no-empty': 'warn',
			'no-irregular-whitespace': 'warn'
		}
	}
]
