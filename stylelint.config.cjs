/**
 * Stylelint configuration.
 *
 * @type {import("stylelint").Config}
 * @see [Stylelint rules](https://stylelint.io/user-guide/rules)
 */
// eslint-disable-next-line functional/immutable-data
module.exports = Object.freeze({
	defaultSeverity: "error",
	extends: "stylelint-prettier/recommended",
	plugins: ["stylelint-order"],
	rules: { "order/properties-alphabetical-order": true },
});
