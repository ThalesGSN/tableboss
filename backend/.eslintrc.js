module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'semi': [
			'error',
			'never'
		],
		'object-curly-spacing': ['error', 'always'],
		'react/react-in-jsx-scope': 'off',
		'quotes': ['error', 'single', { 'avoidEscape': true }],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			'argsIgnorePattern': '^_'
		}],
		'@typescript-eslint/no-explicit-any': 'warn'
	}
}
