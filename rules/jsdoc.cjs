// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { ERROR, OFF } = require("./levels.cjs");

/**
 * @type {import("eslint").Linter.RulesRecord}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// Checks that @access tags use the correct values
	"jsdoc/check-access": ERROR,
	// Checks for correct alignment of JSDocs
	"jsdoc/check-alignment": ERROR,
	// FIXME: Check once this is solved: https://github.com/eslint/eslint/issues/14745
	// "jsdoc/check-examples": ERROR,
	// Checks indentation of JSDoc comments unless is a code block ```
	"jsdoc/check-indentation": ERROR,
	// Avoids alignment of values
	"jsdoc/check-line-alignment": [ERROR, "never"],
	// Handled by TypeScript
	"jsdoc/check-param-names": OFF,
	// Avoids duplication of property documentation
	"jsdoc/check-property-names": [ERROR, { enableFixer: true }],
	// Reports invalid block tag names
	"jsdoc/check-tag-names": ERROR,
	// Handled by TypeScript
	"jsdoc/check-types": OFF,
	// Validates the format of some JSDoc tags
	"jsdoc/check-values": ERROR,
	// Validates JSDoc tags that should remain empty
	"jsdoc/empty-tags": ERROR,
	// Handled by TypeScript
	"jsdoc/implements-on-classes": OFF,
	// No rules for description
	"jsdoc/match-description": OFF,
	// General validations for multi/single line JSDocs
	"jsdoc/multiline-blocks": ERROR,
	// Keep description separated from the rest of the tags
	"jsdoc/newline-after-description": ERROR,
	// JSDoc block validation
	"jsdoc/no-bad-blocks": ERROR,
	// Just use ES6 default values
	"jsdoc/no-defaults": ERROR,
	// Just use the minimum number of asterisks
	"jsdoc/no-multi-asterisks": ERROR,
	// Handled by TypeScript (VS Code reports when you should move types to TS)
	"jsdoc/no-types": OFF,
	// Handled by TypeScript
	"jsdoc/no-undefined-types": OFF,
	// Keep it clean and consistent
	"jsdoc/require-asterisk-prefix": ERROR,
	// Description is required so docs are better
	"jsdoc/require-description": ERROR,
	// FIXME: Disabled until this is fixed: https://github.com/gajus/eslint-plugin-jsdoc/issues/779
	// Makes description style better to be used in autogenerated documentation
	"jsdoc/require-description-complete-sentence": OFF,
	// Requires example in every JSDoc
	"jsdoc/require-example": ERROR,
	// Not needed if we keep one function per file
	"jsdoc/require-file-overview": OFF,
	// No hyphen before descriptions
	"jsdoc/require-hyphen-before-param-description": [ERROR, "never"],
	// You can skip JSDocs, but if you add them, make sure they are good
	"jsdoc/require-jsdoc": OFF,
	// FIXME: Disabled because of false positives
	// All function parameters should be documented
	"jsdoc/require-param": OFF,
	// All params should have descriptions
	"jsdoc/require-param-description": ERROR,
	// All params should have names
	"jsdoc/require-param-name": ERROR,
	// Handled by TypeScript
	"jsdoc/require-param-type": OFF,
	// @typedef should have properties when extending object
	"jsdoc/require-property": ERROR,
	// @typedef props should have descriptions
	"jsdoc/require-property-description": ERROR,
	// @typedef props should have names
	"jsdoc/require-property-name": ERROR,
	// Handled by TypeScript
	"jsdoc/require-property-type": OFF,
	// @returns should be defined
	"jsdoc/require-returns": ERROR,
	// @returns format checking
	"jsdoc/require-returns-check": ERROR,
	// @returns should have a description
	"jsdoc/require-returns-description": ERROR,
	// Handled by TypeScript
	"jsdoc/require-returns-type": OFF,
	// Document throw statements
	"jsdoc/require-throws": ERROR,
	// Document yields
	"jsdoc/require-yields": ERROR,
	// Yield formatting
	"jsdoc/require-yields-check": ERROR,
	// Keep a consistent line spacing between tags
	"jsdoc/tag-lines": ERROR,
	// Handled by TypeScript
	"jsdoc/valid-types": OFF,
};
