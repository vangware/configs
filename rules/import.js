import eslintPluginImport from "eslint-plugin-import";
import { ERROR, OFF } from "./levels.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * https://npm.im/eslint-plugin-import
 */
export default [
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { import: eslintPluginImport },
		rules: {
			// Forbid import of modules that aren't declared in the package.json
			"import/no-extraneous-dependencies": ERROR,
			// Prevent importing the submodules of other modules.
			"import/no-internal-modules": OFF,
		},
	},
];
