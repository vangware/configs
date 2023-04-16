import eslintPluginPrettier from "eslint-plugin-prettier";
import { OFF } from "./levels.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * @see [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier)
 */
export default [
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { prettier: eslintPluginPrettier },
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		rules: {
			// TODO: Re-enable linter when this is fixed by the plugin
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...eslintPluginPrettier.configs.recommended.rules,
			// Disable this error because prettier uses mix of spaces and tabs
			"no-mixed-spaces-and-tabs": OFF,
		},
	},
];
