<img alt="Vangware's configs logo" src="./logo.svg" height="192" />

![License][license-badge]
![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

⚙️ [Vangware][vangware] project configurations.

> Currently due to limitations in how tools like ESLint and Prettier work, this package's type is `"commonjs"`. Will be moved to type `"module"` as soon as it's supported by the tools.

## Configurations

-   🚨 [.eslintrc.js][eslint] - JS/TS linting.
-   ⚛️ [.eslintrc.react.js][eslint] - JS/TS linting (for React).
-   ✨ [.prettierrc.js][prettier] - Code beautify.
-   🎨 [.stylelintrc.js][stylelint] - CSS linting.
-   🏷️ [.tsconfig.json][typescript] - TypeScript strict config.
-   📖 [typedoc.css][typedoc] - Typedoc styles.

## Dependencies

```sh
npm i -D \
	@types/eslint \
	@types/node \
	@types/prettier \
	@typescript-eslint/eslint-plugin \
	@typescript-eslint/parser \
	eslint \
	eslint-config-prettier \
	eslint-import-resolver-node \
	eslint-plugin-ban \
	eslint-plugin-functional \
	eslint-plugin-import \
	eslint-plugin-no-null \
	eslint-plugin-prefer-arrow \
	eslint-plugin-prettier \
	# React
		eslint-plugin-react \
		eslint-plugin-react-hooks \
	# /React
	prettier \
	# CSS
		stylelint \
		stylelint-config-prettier \
		stylelint-order \
		stylelint-prettier \
	# /CSS
	typescript
```

<!-- Reference -->

[eslint]: https://eslint.org/docs/user-guide/configuring/
[license-badge]: https://img.shields.io/npm/l/@vangware/configs.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/configs/blob/main/LICENSE
[npm-version-badge]: https://img.shields.io/npm/v/@vangware/configs.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/configs
[open-issues-badge]: https://img.shields.io/github/issues/vangware/configs.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/configs/issues
[prettier]: https://prettier.io/docs/en/options.html
[stylelint]: https://stylelint.io/user-guide/configure/
[typedoc]: https://typedoc.org/guides/options/
[typescript]: https://www.typescriptlang.org/tsconfig
[vangware]: https://vangware.com
