/* eslint-disable max-lines */

/**
 * ESLint configuration.
 *
 * @type {import("eslint").Linter.Config}
 */
// eslint-disable-next-line functional/immutable-data
module.exports = {
	env: {
		// Latest ES version so far
		es2021: true,
		// We want what is common in both the browser and node environments
		"shared-node-browser": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:functional/recommended",
		"plugin:prettier/recommended",
		"prettier/prettier",
	],
	// TypeScript parser just rocks
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// JSX enabled by default (even if it's not a React project)
		ecmaFeatures: { jsx: true },
		// Latest ES version so far
		ecmaVersion: 12,
		extraFileExtensions: [".cjs", ".mjs"],
		project: "tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"eslint-plugin-ban",
		"eslint-plugin-functional",
		"eslint-plugin-import",
		"eslint-plugin-jsdoc",
		"eslint-plugin-no-null",
		"eslint-plugin-prefer-arrow",
	],
	rules: {
		// Grouping overloaded members together to improve readability.
		"@typescript-eslint/adjacent-overload-signatures": "error",
		// Consistent array types using generics `Array` and `ReadonlyArray`.
		"@typescript-eslint/array-type": ["error", { default: "generic" }],
		// Avoid await on non thenable values.
		"@typescript-eslint/await-thenable": "error",
		// @ts-comment rules.
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				// No limitations for @ts-check.
				"ts-check": false,
				// Requires description for @ts-expect-error.
				"ts-expect-error": "allow-with-description",
				// Disables @ts-ignore & @ts-nocheck.
				"ts-ignore": true,
				"ts-nocheck": true,
			},
		],
		// Avoid TSLint comments when we are using ESLint.
		"@typescript-eslint/ban-tslint-comment": "error",
		// Ban some unwanted types.
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					Boolean: {
						fixWith: "boolean",
						message: "Use `boolean` instead.",
					},
					Function: {
						fixWith:
							"(..._arguments: ReadonlyArray<never>) => unknown",
						message: "Use a typed alternative instead.",
					},
					Number: {
						fixWith: "number",
						message: "Use `number` instead.",
					},
					Object: {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead.",
					},
					String: {
						fixWith: "string",
						message: "Use `string` instead.",
					},
					Symbol: {
						fixWith: "symbol",
						message: "Use `symbol` instead.",
					},
					object: {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead.",
					},
					"{}": {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead.",
					},
				},
			},
		],
		// Prettier takes care of this.
		"@typescript-eslint/comma-dangle": "off",
		// Use `Record` instead of index signature.
		"@typescript-eslint/consistent-indexed-object-style": [
			"error",
			"record",
		],
		// Use `as` assertion.
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				assertionStyle: "as",
				objectLiteralTypeAssertions: "allow",
			},
		],
		// Use `type` for type definitions (instead of interfaces).
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		// Enforce "typed imports".
		"@typescript-eslint/consistent-type-imports": "error",
		// Enforce dot.notation instead of square["bracket"]["notation"].
		"@typescript-eslint/dot-notation": "error",
		// Let's use the power of inference.
		"@typescript-eslint/explicit-function-return-type": "off",
		// When working with classes, let's be explicit about accessibility.
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit",
				overrides: {
					accessors: "explicit",
					constructors: "explicit",
				},
			},
		],
		// Let's use the power of inference.
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// Prettier takes care of this.
		"@typescript-eslint/indent": "off",
		// Don't declare stuff without giving it a value.
		"@typescript-eslint/init-declarations": "error",
		// Prettier should take care of this, but just in case.
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
			},
		],
		// If we work with classes, let's make sure they are tidy.
		"@typescript-eslint/member-ordering": "error",
		// Classes? Well, let's make those methods look like arrow functions.
		"@typescript-eslint/method-signature-style": ["error", "property"],
		// Consistent naming.
		"@typescript-eslint/naming-convention": [
			"error",
			{
				format: ["camelCase"],
				leadingUnderscore: "allow",
				selector: "default",
				trailingUnderscore: "forbid",
			},
			{
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
				selector: [
					"objectLiteralProperty",
					"typeMethod",
					"typeProperty",
					"variable",
				],
			},
			{
				format: ["PascalCase"],
				leadingUnderscore: "forbid",
				selector: "typeLike",
			},
		],
		// Just use `[]`.
		"@typescript-eslint/no-array-constructor": "error",
		// Avoid `.toString()` without a useful return type.
		"@typescript-eslint/no-base-to-string": "error",
		// If working with classes, let's avoid duplicated members.
		"@typescript-eslint/no-dupe-class-members": "error",
		// Avoid duplicated imports.
		"@typescript-eslint/no-duplicate-imports": "error",
		// Avoid `delete` of dynamic properties.
		"@typescript-eslint/no-dynamic-delete": "error",
		// Avoid confusing `() => {}`.
		"@typescript-eslint/no-empty-function": "error",
		// An empty interface is useless.
		"@typescript-eslint/no-empty-interface": "error",
		// `any` is EVIL™
		"@typescript-eslint/no-explicit-any": "error",
		// A class with all statics can be turned into an object.
		"@typescript-eslint/no-extraneous-class": "error",
		// Let's avoid floating (unhandled) promises.
		"@typescript-eslint/no-floating-promises": "error",
		// Use `for/of`, or better yet `map` or `forEach`.
		"@typescript-eslint/no-for-in-array": "error",
		// `try/catch` ideally should have a `catch` argument of type `unknown`.
		"@typescript-eslint/no-implicit-any-catch": "error",
		// This is super insecure, avoid it at all costs.
		"@typescript-eslint/no-implied-eval": "error",
		// Inference is beautiful.
		"@typescript-eslint/no-inferrable-types": "off",
		// Avoid using `this` outside a class.
		"@typescript-eslint/no-invalid-this": "off",
		// Avoid `void` for types, use `undefine` instead.
		"@typescript-eslint/no-invalid-void-type": "off",
		// Avoid defining functions inside loops.
		"@typescript-eslint/no-loop-func": "off",
		// Avoid loss of precision in numbers at runtime.
		"@typescript-eslint/no-loss-of-precision": "off",
		// Disallow the `void` operator except when used to discard a value
		"@typescript-eslint/no-meaningless-void-operator": "error",
		// Avoid missuses of the `new` declaration.
		"@typescript-eslint/no-misused-new": "error",
		// Avoid missuses of promises.
		"@typescript-eslint/no-misused-promises": "error",
		// Old TS.
		"@typescript-eslint/no-namespace": "error",
		// Prevents using non-null assertion with nullish coalescing.
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		// Avoid null assertion
		"@typescript-eslint/no-non-null-assertion": "error",
		// Handy in TS, confusing for everyone else.
		"@typescript-eslint/no-parameter-properties": "error",
		// Avoid re-declaration of a value.
		"@typescript-eslint/no-redeclare": "error",
		// Use ES imports.
		"@typescript-eslint/no-require-imports": "error",
		// Avoid name shadowing.
		"@typescript-eslint/no-shadow": [
			"error",
			{
				allow: ["_"],
				hoist: "all",
			},
		],
		// Just use arrow functions, _this/that aliases are no longer needed.
		"@typescript-eslint/no-this-alias": "error",
		// Throw errors, not literals.
		"@typescript-eslint/no-throw-literal": "error",
		// If it's a `boolean`, use it as such.
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		// Avoid conditions with values that can't be falsy.
		"@typescript-eslint/no-unnecessary-condition": "error",
		// If the type assertion is the same, skip it.
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		// Don't assert something that doesn't need assertion.
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		// Don't do `extends any` or `extends unknown`. That's the default.
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		// Disallows calling an function with an `any` type value.
		"@typescript-eslint/no-unsafe-argument": "error",
		// Avoid `any` assignments.
		"@typescript-eslint/no-unsafe-assignment": "error",
		// Avoid calling `any`.
		"@typescript-eslint/no-unsafe-call": "error",
		// Avoid accessing `any` members.
		"@typescript-eslint/no-unsafe-member-access": "error",
		// Avoid returning `any`.
		"@typescript-eslint/no-unsafe-return": "error",
		// Don't just leave expressions lying around! Use them!
		"@typescript-eslint/no-unused-expressions": "error",
		// TS already takes care of this.
		"@typescript-eslint/no-unused-vars": "off",
		// Avoid using something before is defined.
		"@typescript-eslint/no-use-before-define": "error",
		// When working with classes, let's not define useless constructors.
		"@typescript-eslint/no-useless-constructor": "error",
		// Use ES imports!
		"@typescript-eslint/no-var-requires": "error",
		// Use `as const` instead of writing `Readonly<Type>`.
		"@typescript-eslint/prefer-as-const": "error",
		// If you'll use a `for` loop on an array, use `for/of`.
		"@typescript-eslint/prefer-for-of": "error",
		// Cleaner than the alternative.
		"@typescript-eslint/prefer-function-type": "error",
		// Avoid `indexOf` and use `includes` instead.
		"@typescript-eslint/prefer-includes": "error",
		// Use `namespace` instead of `module` (old TS).
		"@typescript-eslint/prefer-namespace-keyword": "error",
		// Use `??` instead of a ternary.
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		// Use `?.` instead of checking every property.
		"@typescript-eslint/prefer-optional-chain": "error",
		// In classes, private members should be read only.
		"@typescript-eslint/prefer-readonly": "error",
		// Immutability for the win!
		"@typescript-eslint/prefer-readonly-parameter-types": [
			"error",
			{ ignoreInferredTypes: true, treatMethodsAsReadonly: true },
		],
		// Use `startsWith` and `endsWith` instead of the string index.
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		// Use `@ts-expect-error` instead of `@ts-ignore`.
		"@typescript-eslint/prefer-ts-expect-error": "error",
		// Handled by Prettier
		"@typescript-eslint/quotes": "off",
		// Always use `Array.prototype.sort` with a comparing function.
		"@typescript-eslint/require-array-sort-compare": "error",
		// Use `await` if you are using `async`.
		"@typescript-eslint/require-await": "error",
		// Use `+` with the same type (`number` or `string`).
		"@typescript-eslint/restrict-plus-operands": [
			"error",
			{ checkCompoundAssignments: true },
		],
		// Only use strings or numbers inside template expressions.
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowNumber: true,
			},
		],
		// Enforce consistent use of semicolons after statements.
		"@typescript-eslint/semi": ["error", "always"],
		// Consistent sorting of intersections and unions.
		"@typescript-eslint/sort-type-union-intersection-members": "error",
		// Handled by Prettier
		"@typescript-eslint/space-before-function-paren": "off",
		// Comparisons should be applied to booleans only (not falsy/truthy).
		"@typescript-eslint/strict-boolean-expressions": "error",
		// If you'll use switch, make sure to cover every possible value.
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		// Old TS.
		"@typescript-eslint/triple-slash-reference": "error",
		// Spacing with types (should be handled by Prettier).
		"@typescript-eslint/type-annotation-spacing": "error",
		// Bind stuff before using it.
		"@typescript-eslint/unbound-method": "error",
		// Unify signatures instead of overloading.
		"@typescript-eslint/unified-signatures": "error",
		// Makes sure you return from mapping functions.
		"array-callback-return": "error",
		// Only use braces in arrow functions when needed.
		"arrow-body-style": ["error", "as-needed"],
		// Only use parens in arrow functions when needed.
		"arrow-parens": ["error", "as-needed"],
		// This plugin gives false positives (it doesn't have type information).
		"ban/ban": [
			"warn",
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
		// Handled by `@typescript-eslint/naming-convention`
		camelcase: "off",
		// Enforce capitalization of the first letter on comments
		"capitalized-comments": ["error", "always"],
		// Enforce that class methods utilize `this`
		"class-methods-use-this": "error",
		// Handled by Prettier
		"comma-dangle": "off",
		// Limit Cyclomatic Complexity
		complexity: "error",
		// Require return statements to either always or never specify values
		"consistent-return": "error",
		// Require following curly brace conventions
		curly: "error",
		// Require `default` case in `switch` statements
		"default-case": "error",
		// Enforce default clauses in switch statements to be last
		"default-case-last": "error",
		// Enforce default parameters to be last
		"default-param-last": "error",
		// Handled by `@typescript-eslint/dot-notation`
		"dot-notation": "off",
		// Require newline at the end of files
		"eol-last": "error",
		// Require `===` and `!==`
		eqeqeq: "error",
		// This rule has good intentions, but generally we have `thunks`
		"functional/functional-parameters": "off",
		// Avoid functions called and not being assigned. Ignore `void`
		// Disabled for now because it gives false positives for optional call: `something?.()`
		"functional/no-expression-statement": "off", // ["error", { ignoreVoid: true }]
		// Warn about mix of functions and values in objects
		"functional/no-mixed-type": "warn",
		// Allow returning `undefined`, but not `null`
		"functional/no-return-void": [
			"error",
			{
				allowNull: false,
				allowUndefined: true,
				ignoreImplicit: true,
			},
		],
		// Require grouped accessor pairs in object literals and classes
		"grouped-accessor-pairs": "error",
		// Require guarding for..in loops
		"guard-for-in": "error",
		// Disallow specified identifiers
		"id-blacklist": [
			"error",
			"cb", // Write "callback", is just a few more letters.
			"e", // What is this? Event? Error? Just type the entire word!
			"err", // Write "error", is just a few  more letters.
			"ev", // Write "event", is just a few more letters.
			"i", // Write "index", is just a few more letters.
			"opt", // Write "option", is just a few more letters.
			"opts", // Write "options", is just a few more letters.
		],
		// Enforce minimum (2) identifier lengths
		"id-length": [
			"error",
			{
				exceptions: [
					"_", // Allow `_` as a common "placeholder"
					"x", // Allow `x` for the x coordinate
					"y", // Allow `y` for the y coordinate
					"z", // Allow `z` for the z coordinate
				],
			},
		],
		// Handled by `@typescript-eslint/naming-convention`
		"id-match": "off",
		// Forbid import of modules that aren't declared in the package.json
		"import/no-extraneous-dependencies": "error",
		// Prevent importing the submodules of other modules.
		"import/no-internal-modules": "off",
		// Handled by `@typescript-eslint/init-declarations`
		"init-declarations": "off",
		// Checks that @access tags use the correct values
		"jsdoc/check-access": "error",
		// Checks for correct alignment of JSDocs
		"jsdoc/check-alignment": "error",
		// Check once this is solved: https://github.com/eslint/eslint/issues/14745
		// "jsdoc/check-examples": "error",
		// Checks indentation of JSDoc comments unless is a code block ```
		"jsdoc/check-indentation": "error",
		// Avoids alignment of values
		"jsdoc/check-line-alignment": ["error", "never"],
		// Disabled because of false positives
		"jsdoc/check-param-names": "off",
		// Avoids duplication of property documentation
		"jsdoc/check-property-names": ["error", { enableFixer: true }],
		// Reports invalid block tag names
		"jsdoc/check-tag-names": "error",
		// Handled by TypeScript
		"jsdoc/check-types": "off",
		// Validates the format of some JSDoc tags
		"jsdoc/check-values": "error",
		// Validates JSDoc tags that should remain empty
		"jsdoc/empty-tags": "error",
		// Handled by TypeScript
		"jsdoc/implements-on-classes": "off",
		// No rules for description
		"jsdoc/match-description": "off",
		// General validations for multi/single line JSDocs
		"jsdoc/multiline-blocks": "error",
		// Keep description separated from the rest of the tags
		"jsdoc/newline-after-description": "error",
		// JSDoc block validation
		"jsdoc/no-bad-blocks": "error",
		// Just use ES6 default values
		"jsdoc/no-defaults": "error",
		// Just use the minimum number of asterisks
		"jsdoc/no-multi-asterisks": "error",
		// Handled by TypeScript (VSCode reports when you should move types to TS)
		"jsdoc/no-types": "off",
		// Handled by TypeScript
		"jsdoc/no-undefined-types": "off",
		// Keep it clean and consistent
		"jsdoc/require-asterisk-prefix": "error",
		// Description is required so docs are better
		"jsdoc/require-description": "error",
		// Makes description style better to be used in autogenerated documentation
		"jsdoc/require-description-complete-sentence": "error",
		// Requires example in every JSDoc
		"jsdoc/require-example": "error",
		// Not needed if we keep one function per file
		"jsdoc/require-file-overview": "off",
		// No hyphen before descriptions
		"jsdoc/require-hyphen-before-param-description": ["error", "never"],
		// We should always document functions
		"jsdoc/require-jsdoc": "error",
		// Disabled because of false positives
		"jsdoc/require-param": "off",
		// All params should have descriptions
		"jsdoc/require-param-description": "error",
		// All params should have names
		"jsdoc/require-param-name": "error",
		// Handled by TypeScript
		"jsdoc/require-param-type": "off",
		// @typedef should have properties when extending object
		"jsdoc/require-property": "error",
		// @typedef props should have descriptions
		"jsdoc/require-property-description": "error",
		// @typedef props should have names
		"jsdoc/require-property-name": "error",
		// Handled by TypeScript
		"jsdoc/require-property-type": "off",
		// @returns should be defined
		"jsdoc/require-returns": "error",
		// @returns format checking
		"jsdoc/require-returns-check": "error",
		// @returns should have a description
		"jsdoc/require-returns-description": "error",
		// Handled by TypeScript
		"jsdoc/require-returns-type": "off",
		// Document throw statements
		"jsdoc/require-throws": "error",
		// Document yields
		"jsdoc/require-yields": "error",
		// Yield formatting
		"jsdoc/require-yields-check": "error",
		// Keep a consistent line spacing between tags
		"jsdoc/tag-lines": "error",
		// Handled by TypeScript
		"jsdoc/valid-types": "off",
		// Enforce consistent linebreak style (unix)
		"linebreak-style": ["error", "unix"],
		// Enforce a maximum of 1 `class` per file
		"max-classes-per-file": ["error", 1],
		// Handled by Prettier (some lines can't be limited)
		"max-len": "off",
		// Enforce a maximum file length
		"max-lines": [
			"error",
			// eslint-disable-next-line id-blacklist
			{ max: 300, skipBlankLines: true, skipComments: true },
		],
		// Try to keep it as low as possible, but don't enforce it.
		"max-params": "off",
		// Require parentheses when invoking a constructor with no arguments
		"new-parens": "error",
		// Handled by Prettier
		"newline-per-chained-call": "off",
		// Disallow use of `alert`, `confirm`, and `prompt`
		"no-alert": "error",
		// Warn about bitwise that might be wrong usages of logic operators
		"no-bitwise": "warn",
		// Disallow use of `caller` and `callee`
		"no-caller": "error",
		// Warn about `console` usages
		"no-console": "warn",
		// Disallow returning value in constructor
		"no-constructor-return": "error",
		// Handled by `@typescript-eslint/no-duplicate-imports`
		"no-duplicate-imports": "off",
		// Disallow eval()
		"no-eval": "error",
		// Disallow extending of native objects (`prototype` of native)
		"no-extend-native": "error",
		// Disallow unnecessary function binding
		"no-extra-bind": "error",
		// Handled by TypeScript
		"no-extra-boolean-cast": "off",
		// Disallow floating decimals (decimals without the `0`)
		"no-floating-decimal": "error",
		// Disallow the type conversion with shorter notations
		"no-implicit-coercion": "error",
		// Handled by `@typescript-eslint/no-implied-eval`
		"no-implied-eval": "off",
		// Disallow assigning to imported bindings
		"no-import-assign": "error",
		// Disallow Unnecessary Nested Blocks
		"no-lone-blocks": "error",
		// Handled by `@typescript-eslint/no-loop-func`
		"no-loop-func": "off",
		// Disallow multiple spaces (generally handled by Prettier)
		"no-multi-spaces": "error",
		// Disallow multiline strings (use template strings instead)
		"no-multi-str": "error",
		// Disallow multiple empty lines (generally handled by Prettier)
		"no-multiple-empty-lines": ["error", { max: 1 }],
		// Disallow function constructor (`new Function()`)
		"no-new-func": "error",
		// Disallow primitive wrapper instances (new String, new Boolean, etc.)
		"no-new-wrappers": "error",
		// Disallow `null` (use `undefined` instead)
		"no-null/no-null": "error",
		// Disallow reassignment of function parameters
		"no-param-reassign": "error",
		// Disallow the unary operators `++` and `--`
		"no-plusplus": "error",
		// Disallow use of `__proto__` (deprecated).
		"no-proto": "error",
		// Handled by `@typescript-eslint/no-redeclare`
		"no-redeclare": "off",
		// Disallows unnecessary return await
		"no-return-await": "error",
		// Disallow self compare (comparing a value to itself)
		"no-self-compare": "error",
		// Handled by `@typescript-eslint/no-shadow`
		"no-shadow": "off",
		// Disallow template literal placeholder syntax in regular strings
		"no-template-curly-in-string": "error",
		// Restrict what can be thrown as an exception
		"no-throw-literal": "error",
		// Disallow trailing whitespace at the end of lines
		"no-trailing-spaces": "error",
		// Handled by TypeScript
		"no-undef": "off",
		// Disallow initializing to `undefined`
		"no-undef-init": "error",
		// Disallow unmodified conditions of loops
		"no-unmodified-loop-condition": "error",
		// Disallow ternaries like: condition ? true : false
		"no-unneeded-ternary": "error",
		// Disallow loops with a body that allows only one iteration
		"no-unreachable-loop": "error",
		// Handled by `@typescript-eslint/no-unused-expressions`
		"no-unused-expressions": "off",
		// Disallow unnecessary `.call()` and `.apply()`
		"no-useless-call": "error",
		// Disallow unnecessary concatenation of strings
		"no-useless-concat": "error",
		// Disallow redundant return statements
		"no-useless-return": "error",
		// Require let or const instead of var
		"no-var": "error",
		// Require object literal shorthand syntax
		"object-shorthand": "error",
		// Enforce variables to be declared separately in functions
		"one-var": ["error", "never"],
		// Require padding lines between statements
		"padding-line-between-statements": [
			"error",
			// Always a new line before a `return`
			{
				blankLine: "always",
				next: "return",
				prev: "*",
			},
			// Always add a new line after an `import`, `const`, `let` or `var`
			{
				blankLine: "always",
				next: "*",
				prev: ["import", "const", "let", "var"],
			},
			// Indifferent if followed by same type (`const`, `let` or `var`).
			{
				blankLine: "any",
				next: ["const", "let", "var"],
				prev: ["const", "let", "var"],
			},
			// Indifferent in `import` followed by other `import`
			{
				blankLine: "any",
				next: "import",
				prev: "import",
			},
			// Always a new line before an `export`
			{
				blankLine: "always",
				next: "export",
				prev: "*",
			},
			// Indifferent in `export` followed by other `export`
			{
				blankLine: "any",
				next: "export",
				prev: "export",
			},
		],
		// https://npm.im/eslint-plugin-prefer-arrow
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{ classPropertiesAllowed: true },
		],
		// Suggest using const
		"prefer-const": "error",
		// Warn about the use of `Math.pow` in favor of the `**` operator
		"prefer-exponentiation-operator": "warn",
		// Suggest using named capture group in regular expressions
		"prefer-named-capture-group": "warn",
		// Prefer use of an object spread over `Object.assign`
		"prefer-object-spread": "warn",
		// Disallow use of the `RegExp` in favor of regular expression literals
		"prefer-regex-literals": "error",
		// Suggest using the rest parameters instead of `arguments`
		"prefer-rest-params": "error",
		// Suggest using spread syntax instead of `.apply()`
		"prefer-spread": "error",
		// Suggest using template literals instead of string concatenation.
		"prefer-template": "error",
		// Require quotes in props as needed (generally handled by Prettier)
		"quote-props": ["error", "as-needed"],
		// Require radix parameter in `parseInt`
		radix: "error",
		// Handled by `@typescript-eslint/require-await`
		"require-await": "off", // Checked by TS
		// Enforce the use of `u` flag on `RegExp`
		"require-unicode-regexp": "error",
		// Require object keys to be sorted
		"sort-keys": "error",
		// Handled by `@typescript-eslint/space-before-function-paren`
		"space-before-function-paren": "off",
		// Requires a whitespace (space or tab) beginning a comment
		"spaced-comment": "error",
		// Require IIFEs to be wrapped
		"wrap-iife": ["error", "inside"],
		// Disallow yoda conditions
		yoda: "error",
	},
	settings: {
		jsdoc: { structuredTags: { category: { name: "text", type: false } } },
	},
};
