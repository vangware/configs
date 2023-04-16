import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
import { ERROR } from "./levels.js";

/**
 * @type {import("eslint").Linter.FlatConfig}
 * @see [eslint-plugin-prefer-arrow](https://npm.im/eslint-plugin-prefer-arrow)
 */
export default {
	plugins: { "prefer-arrow": eslintPluginPreferArrow },
	rules: {
		"prefer-arrow/prefer-arrow-functions": [
			ERROR,
			{ classPropertiesAllowed: true },
		],
	},
};
