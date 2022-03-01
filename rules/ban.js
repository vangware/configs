// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const { WARN } = require("./levels.js");

/**
 * @type {import("eslint").Linter.RulesRecord}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	// This plugin gives false positives (it doesn't have type information).
	"ban/ban": [
		WARN,
		// Array
		{
			message: "Use `Array.prototype.slice` and spread instead.",
			name: ["*", "copyWithin"],
		},
		{
			message: "Use `Array.prototype.slice` instead.",
			name: ["*", "pop"],
		},
		{
			message: "Use spread instead `[...array, item]`.",
			name: ["*", "push"],
		},
		{
			message: "Use `Array.prototype.slice` instead.",
			name: ["*", "shift"],
		},
		{
			message: "Use `Array.prototype.slice` instead.",
			name: ["*", "splice"],
		},
		{
			message: "Use spread instead `[item, ...array]`.",
			name: ["*", "unshift"],
		},
		// Function
		{
			message: "Call the function directly with spread arguments.",
			name: ["*", "apply"],
		},
		{
			message: "Make a curried function instead.",
			name: ["*", "bind"],
		},
		{
			message: "Call the function directly with spread arguments.",
			name: ["*", "call"],
		},
		// Object
		{
			message: "Avoid mutations.",
			name: ["*", "freeze"],
		},
		{
			message: "Use `Object.keys` or `Object.entries` instead.",
			name: ["*", "getOwnPropertyNames"],
		},
		{
			message: "Avoid using classes and prototypes.",
			name: ["*", "getPrototypeOf"],
		},
		{
			message: "Avoid mutations.",
			name: ["*", "isExtensible"],
		},
		{
			message: "Avoid mutations.",
			name: ["*", "isFrozen"],
		},
		{
			message: "Avoid mutations.",
			name: ["*", "isSealed"],
		},
		{
			message: "Avoid mutations.",
			name: ["*", "preventExtension"],
		},
		{
			message: "Avoid mutations.",
			name: ["*", "seal"],
		},
		{
			message: "Avoid using classes and prototypes.",
			name: ["*", "setPrototypeOf"],
		},
		// Math
		{
			message: "Use the `**` operator instead.",
			name: ["*", "pow"],
		},
		// Date
		{
			message: "Use `Date.prototype.getFullYear` instead.",
			name: ["*", "getYear"],
		},
		{
			message: "Use `Date.prototype.setFullYear` instead.",
			name: ["*", "setYear"],
		},
		{
			message: "USe `Date.prototype.toLocaleDateString` instead.",
			name: ["*", "toDateString"],
		},
		{
			message: "USe `Date.prototype.toLocaleTimeString` instead.",
			name: ["*", "toTimeString"],
		},
		{
			message: "Use `Date.prototype.toUTCString` instead.",
			name: ["*", "toGMTString"],
		},
		// String
		{
			message: "Use `String.prototype.toLocaleLowerCase` instead.",
			name: ["*", "toLowerCase"],
		},
		{
			message: "Use `String.prototype.toLocaleUpperCase` instead.",
			name: ["*", "toUpperCase"],
		},
	],
};
