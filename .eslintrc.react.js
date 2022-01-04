/*
eslint-disable
	@typescript-eslint/no-require-imports,
	@typescript-eslint/no-var-requires,
	functional/immutable-data,
	functional/no-expression-statement,
*/

const eslintrc = require("./.eslintrc.js");

/**
 * ESLint configuration (for React).
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	...eslintrc,
	extends: [
		.../** @type {string[]} */ (eslintrc.extends),
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	plugins: [.../** @type {string[]} */ (eslintrc.plugins), "react"],
	rules: {
		...eslintrc.rules,
		// Prevent usage of button elements without an explicit type attribute
		"react/button-has-type": "error",
		// Enforce a specific function type for function components
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		// Enforce boolean attributes notation in JSX to never set it explicitly
		"react/jsx-boolean-value": ["error", "never"],
		// Enforce curly braces or braces in JSX props and/or children
		"react/jsx-curly-brace-presence": "error",
		// Enforce shorthand form for fragments `<></>`
		"react/jsx-fragments": ["error", "syntax"],
		// Enforce event handler naming conventions in JSX
		"react/jsx-handler-names": "error",
		// Prevent react contexts from taking non-stable values
		"react/jsx-no-constructed-context-values": "error",
		// Prevent usage of `javascript:` URLs
		"react/jsx-no-script-url": "error",
		// Prevent usage of unsafe `target='_blank'` without `rel="noreferrer"`
		"react/jsx-no-target-blank": "error",
		// Disallow unnecessary fragments
		"react/jsx-no-useless-fragment": "error",
		// Enforce PascalCase for user-defined JSX components
		"react/jsx-pascal-case": "error",
		// Enforce props alphabetical sorting
		"react/jsx-sort-props": "error",
		// Prevent usage of Array index in keys
		"react/no-array-index-key": "warn",
		// Don't prevent passing of `children` as props
		"react/no-children-prop": "off",
		// Prevent usage of dangerous JSX properties
		"react/no-danger": "error",
		// Prevent multiple component definition per file
		"react/no-multi-comp": "error",
		// Prevent `this` from being used in stateless functional components
		"react/no-this-in-sfc": "error",
		// Prevent usage of unsafe lifecycle methods
		"react/no-unsafe": "error",
		// Prevent creating unstable components inside components
		"react/no-unstable-nested-components": "error",
		// Enforce stateless React Components to be written as a pure function
		"react/prefer-stateless-function": "error",
		// Handled by TypeScript
		"react/prop-types": "off",
		// Handled by TypeScript
		"react/react-in-jsx-scope": "off",
	},
	settings: {
		react: {
			version: "17",
		},
	},
};
