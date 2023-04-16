// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR, OFF } = require("./levels.js");

/**
 * @type {import("eslint").Linter.RulesRecord}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// Forbid import of modules that aren't declared in the package.json
	"import/no-extraneous-dependencies": ERROR,
	// Prevent importing the submodules of other modules.
	"import/no-internal-modules": OFF,
};
