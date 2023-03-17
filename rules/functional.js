import eslintPluginFunctional from "eslint-plugin-functional";
import { ERROR, OFF, WARN } from "./levels.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * @see [eslint-plugin-functional](https://npm.im/eslint-plugin-functional)
 */
export default [
	// TODO: Re-enable linter when this is fixed by the plugin
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	eslintPluginFunctional.configs.recommended,
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { functional: eslintPluginFunctional },
		rules: {
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
			"functional/no-expression-statements": [
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
			"functional/no-mixed-types": WARN,
			// Allow returning `undefined`, but not `null`
			"functional/no-return-void": [
				ERROR,
				{
					allowNull: false,
					allowUndefined: true,
					ignoreInferredTypes: true,
				},
			],
			// This is handled by @typescript-eslint/prefer-readonly-parameter-types
			"functional/prefer-immutable-types": OFF,
		},
	},
];
