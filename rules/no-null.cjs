// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR } = require("./levels.cjs");

/**
 * @type {import("eslint").Linter.RulesRecord}
 * https://www.npmjs.com/package/eslint-plugin-no-null
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// Disallow `null` (use `undefined` instead)
	"no-null/no-null": ERROR,
};
