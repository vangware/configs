import eslintPluginNoNull from "eslint-plugin-no-null";
import { ERROR } from "./levels.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * https://npm.im/eslint-plugin-no-null
 */
export default [
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { "no-null": eslintPluginNoNull },
		rules: {
			// Disallow `null` (use `undefined` instead)
			"no-null/no-null": ERROR,
		},
	},
];
