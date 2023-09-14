# This repository's code was moved to [this monorepo](https://github.com/vangware/libraries/tree/main/packages/@vangware/configs).

<img id="logo" alt="Configs by Vangware" src="./logo.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

⚙️ Shared [Vangware][vangware] project configuration files for linting,
formatting, documentation and so on.

## Configurations

-   🦋 [changelog.cjs][changesets] — Changesets changelog functions.
-   🚨 [eslint.config.js][eslint] — JavaScript and TypeScript linting.
-   ✨ [prettier.config.cjs][prettier] — Code formatting.
-   🎨 [stylelint.config.cjs][stylelint] — CSS linting.
-   🏷️ [typescript.config.json][typescript] — TypeScript configuration (strict).
-   📖 [typedoc.css][typedoc] — Documentation styles.
-   📖 [typedoc.config.json][typedoc] — Documentation configuration.

## Usage

All this configurations are setup automatically by
[@vangware/create-package][create-package] when creating a new package.

For manual setup of each file, follow the instructions below.

### `.changeset/config.json`

```json
{
	"$schema": "https://raw.githubusercontent.com/changesets/changesets/main/packages/config/schema.json",
	"changelog": "@vangware/configs/changelog.cjs",
	"commit": false,
	"access": "restricted",
	"baseBranch": "main",
	"updateInternalDependencies": "patch"
}
```

### `eslint.config.js`

```typescript
export { default } from "@vangware/configs/eslint.config.js";
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
	"extends": ["@vangware/configs/typedoc.config.json"],
	"name": "PACKAGE NAME"
}
```

## Useful links

-   ⏳ [Changelog][changelog]: List of changes between versions.

<!-- Reference -->

[changelog]: https://github.com/vangware/configs/blob/main/CHANGELOG.md
[changesets]: https://github.com/changesets/changesets
[create-package]: https://create-package.vangware.com
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
