// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR, WARN } = require("./levels.cjs");

/**
 * @type {import("eslint").Linter.RulesRecord}
 * https://www.npmjs.com/package/eslint-plugin-functional
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// This rule has good intentions, but generally we have `thunks`
	"functional/functional-parameters": [
		ERROR,
		{
			allowArgumentsKeyword: false,
			allowRestParameter: true,
			enforceParameterCount: false,
		},
	],
	// Avoid functions called and not being assigned. Ignore `void`
	"functional/no-expression-statement": [
		ERROR,
		{
			ignorePattern: [
				// Optional chained functions
				"\\?\\.\\(",
				// Yielded values
				"\\s*yield",
				// Assignments (handled by other rules)
				"\\w+\\s*=\\s*.",
			],
			ignoreVoid: true,
		},
	],
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
