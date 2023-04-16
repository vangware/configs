// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR, OFF, WARN } = require("./levels.js");

/**
 * @type {import("eslint").Linter.RulesRecord}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// This rule has good intentions, but generally we have `thunks`
	"functional/functional-parameters": OFF,
	// Avoid functions called and not being assigned. Ignore `void`
	// Disabled for now because it gives false positives for optional call: `something?.()`
	"functional/no-expression-statement": OFF, // ["error", { ignoreVoid: true }]
	// Warn about mix of functions and values in objects
	"functional/no-mixed-type": WARN,
	// Allow returning `undefined`, but not `null`
	"functional/no-return-void": [
		ERROR,
		{
			allowNull: false,
			allowUndefined: true,
			ignoreImplicit: true,
		},
	],
};
