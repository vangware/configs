/**
 * Prettier configuration.
 *
 * @type {import("prettier").Options}
 */
module.exports = {
	// Avoid parentheses around a sole arrow function parameter
	arrowParens: "avoid",
	// Put the `>` of a multi-line HTML like in a new line
	bracketSameLine: false,
	// Print spaces between brackets in object literals
	bracketSpacing: true,
	// Control whether Prettier formats quoted code embedded in the file
	embeddedLanguageFormatting: "auto",
	// Unix EOL
	endOfLine: "lf",
	// Ignore whitespace in HTML
	htmlWhitespaceSensitivity: "ignore",
	// JSX should use double quote
	jsxSingleQuote: false,
	// Print width is ideal at 80 characters
	printWidth: 80,
	// Preserve wrap on text
	proseWrap: "preserve",
	// Add quotes around properties of object if needed
	quoteProps: "as-needed",
	// Print semicolons at the ends of statements.
	semi: true,
	// Shows one attribute per line in HTML, Vue and JSX
	singleAttributePerLine: true,
	// Use double quotes
	singleQuote: false,
	// Tab width at 4 is ideal
	tabWidth: 4,
	// Add trailing commas to make edition easier and diffing better
	trailingComma: "all",
	// Obviously use tabs
	useTabs: true,
	// Indent code in Vue files
	vueIndentScriptAndStyle: true,
};
