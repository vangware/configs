import coreRules from "./rules/core.js";
import functionalRules from "./rules/functional.js";
import importRules from "./rules/import.js";
import noNullRules from "./rules/no-null.js";
import preferArrowRules from "./rules/prefer-arrow.js";
import prettierRules from "./rules/prettier.js";
import reactRules from "./rules/react.js";
import typescriptRules from "./rules/typescript.js";

/**
 * ESLint configuration.
 * @type {ReadonlyArray<import("eslint").Linter.FlatConfig>}
 */
export default [
	coreRules,
	...functionalRules,
	importRules,
	noNullRules,
	preferArrowRules,
	prettierRules,
	...reactRules,
	...typescriptRules,
];
