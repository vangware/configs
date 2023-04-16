import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
import { ERROR } from "./levels.js";

/**
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 * https://npm.im/eslint-plugin-prefer-arrow
 */
export default [
	{
		// TODO: Re-enable linter when this is fixed by the plugin
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { "prefer-arrow": eslintPluginPreferArrow },
		rules: {
			"prefer-arrow/prefer-arrow-functions": [
				ERROR,
				{ classPropertiesAllowed: true },
			],
		},
	},
];
