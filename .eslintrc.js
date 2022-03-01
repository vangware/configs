/* eslint-disable max-lines, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

const coreRules = require("./rules/core.js");
const banRules = require("./rules/ban.js");
const functionalRules = require("./rules/functional.js");
const importRules = require("./rules/import.js");
const jsdocRules = require("./rules/jsdoc.js");
const noNullRules = require("./rules/no-null.js");
const preferArrowRules = require("./rules/prefer-arrow.js");
const typescriptRules = require("./rules/typescript.js");

// FIXME: Remove this one this issue is resolve: https://github.com/eslint/eslint/issues/3458
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
		es2021: true,
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
		// JSX enabled by default (even if it's not a React project)
		ecmaFeatures: { jsx: true },
		// Latest ES version
		ecmaVersion: "latest",
		// Add support for `.cjs` and `.mjs` files
		extraFileExtensions: [".cjs", ".mjs"],
		project: "tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"ban",
		"functional",
		"import",
		"jsdoc",
		"no-null",
		"prefer-arrow",
	],
	rules: {
		...coreRules,
		...banRules,
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
