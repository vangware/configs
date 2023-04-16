/**
 * Stylelint configuration.
 *
 * @type {import("stylelint").Config}
 * @see [Stylelint rules](https://stylelint.io/user-guide/rules)
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	defaultSeverity: "error",
	extends: "stylelint-prettier/recommended",
	ignoreFiles: [],
	plugins: ["stylelint-order"],
	processors: [],
	rules: { "order/properties-alphabetical-order": true },
};
