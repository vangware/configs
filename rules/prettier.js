import eslintPluginPrettier from "eslint-plugin-prettier";
import { OFF } from "./levels.js";

/**
 * @type {import("eslint").Linter.FlatConfig}
 * @see [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier)
 */
export default {
	plugins: { prettier: eslintPluginPrettier },
	rules: {
		...eslintPluginPrettier.configs.recommended.rules,
		// Disable this error because prettier uses mix of spaces and tabs
		"no-mixed-spaces-and-tabs": OFF,
	},
};
