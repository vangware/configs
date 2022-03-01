// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR } = require("./levels.js");

/**
 * @type {import("eslint").Linter.RulesRecord}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	"prefer-arrow/prefer-arrow-functions": [
		ERROR,
		{ classPropertiesAllowed: true },
	],
};
