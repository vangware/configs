/*
eslint-disable
	functional/immutable-data,
	functional/no-expression-statement,
*/

/**
 * Stylelint configuration.
 *
 * @type {import("stylelint").Config}
 */
module.exports = {
	defaultSeverity: "error",
	extends: "stylelint-prettier/recommended",
	ignoreFiles: [],
	plugins: ["stylelint-order"],
	processors: [],
	rules: {
		// Indent with tabs, obviously (Prettier should take care of this)
		indentation: "tab",
		// Sort properties alphabetically
		"order/properties-alphabetical-order": true,
	},
};
