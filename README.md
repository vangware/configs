<img alt="Vangware's configs logo" src="./logo.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

⚙️ [Vangware][vangware] project configurations.

## Configurations

-   🚨 [eslint.config.js][eslint] - JS/TS linting.
-   ✨ [prettier.config.cjs][prettier] - Code beautify.
-   🎨 [stylelint.config.cjs][stylelint] - CSS linting.
-   🏷️ [typescript.config.json][typescript] - TypeScript strict config.
-   📖 [typedoc.css][typedoc] - Typedoc styles.
-   📖 [typedoc.json][typedoc] - Typedoc config.

## Usage

### `eslint.config.js`

```typescript
export default "@vangware/configs/eslint.config.js";
```

### `prettier.config.cjs`

```typescript
module.exports = require("@vangware/configs/prettier.config.cjs");
```

### `stylelint.config.cjs`

```typescript
module.exports = require("@vangware/configs/stylelint.config.cjs");
```

### `tsconfig.json`

```json
{
	"extends": "@vangware/configs/typescript.config.json"
}
```

### `typedoc.json`

```json
{
	"$schema": "https://typedoc.org/schema.json",
	"cname": "PUBLIC DOMAIN",
	"entryPoints": ["./lib"],
	"extends": ["@vangware/configs/typedoc.json"],
	"name": "PACKAGE NAME"
}
```

<!-- Reference -->

[eslint]: https://eslint.org/docs/user-guide/configuring/
[license-badge]:
	https://img.shields.io/npm/l/@vangware/configs.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/configs/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/configs.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/configs
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/configs.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/configs/issues
[prettier]: https://prettier.io/docs/en/options.html
[stylelint]: https://stylelint.io/user-guide/configure/
[typedoc]: https://typedoc.org/guides/options/
[typescript]: https://www.typescriptlang.org/tsconfig
[vangware]: https://vangware.com
