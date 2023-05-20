import eslintPluginNoNull from "eslint-plugin-no-null";
import { ERROR } from "./levels.js";

/**
 * @type {import("eslint").Linter.FlatConfig}
 * @see [eslint-plugin-no-null](https://npm.im/eslint-plugin-no-null)
 */
export default {
	plugins: { "no-null": eslintPluginNoNull },
	// Disallow `null` (use `undefined` instead)
	rules: { "no-null/no-null": ERROR },
};
