/* eslint-disable max-lines, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

const coreRules = require("./rules/core.cjs");
const functionalRules = require("./rules/functional.cjs");
const importRules = require("./rules/import.cjs");
const jsdocRules = require("./rules/jsdoc.cjs");
const noNullRules = require("./rules/no-null.cjs");
const preferArrowRules = require("./rules/prefer-arrow.cjs");
const typescriptRules = require("./rules/typescript.cjs");

// FIXME: Remove this one this issue is resolve: https://github.com/eslint/eslint/issues/3458
// eslint-disable-next-line functional/no-expression-statement
require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * ESLint configuration.
 *
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	env: {
		// Latest ES version so far
		es2022: true,
		// We want what is common in both the browser and node environments
		"shared-node-browser": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:functional/recommended",
		"plugin:prettier/recommended",
		"prettier/prettier",
	],
	// TypeScript parser just rocks
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// Additional language features
		ecmaFeatures: {
			// Enable global strict mode
			impliedStrict: true,
			// JSX enabled by default (even if it's not a React project)
			jsx: true,
		},
		// Latest ES version
		ecmaVersion: "latest",
		// Required for type dependant rules
		project: "tsconfig.json",
		// Using ECMAScript modules
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"functional",
		"import",
		"jsdoc",
		"no-null",
		"prefer-arrow",
	],
	rules: {
		...coreRules,
		...functionalRules,
		...importRules,
		...jsdocRules,
		...noNullRules,
		...preferArrowRules,
		...typescriptRules,
	},
	settings: {
		jsdoc: { structuredTags: { category: { name: "text", type: false } } },
	},
};
