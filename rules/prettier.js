import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginPrettierPlugin from "eslint-plugin-prettier/eslint-plugin-prettier.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * https://npm.im/eslint-plugin-prettier
 */
export default [
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { prettier: eslintPluginPrettierPlugin },
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		rules: eslintPluginPrettier.configs.recommended.rules,
	},
];
