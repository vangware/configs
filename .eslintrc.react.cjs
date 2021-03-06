/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

const eslintrc = require("./.eslintrc.cjs");
const reactRules = require("./rules/react.cjs");

/**
 * ESLint configuration (for React).
 *
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	...eslintrc,
	extends: [
		.../** @type {string[]} */ (eslintrc.extends),
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	plugins: [.../** @type {string[]} */ (eslintrc.plugins), "react"],
	rules: {
		.../** @type {import("eslint").Linter.RulesRecord} */ (eslintrc.rules),
		...reactRules,
	},
	settings: {
		...eslintrc.settings,
		react: { version: "17" },
	},
};
