# Change log

All notable changes to this project will be documented in this file.

-   This project adheres to [Semantic Versioning][semver].
-   This project uses [Gitmoji][gitmoji]

## 3.0.3

-   :arrow_up: dependency upgrade.

## 3.0.2

-   :heavy_minus_sign: remove `pre-push`.
-   :heavy_plus_sign: add `@evilmartians/lefthook`.

## 3.0.1

-   :arrow_up: dependency upgrade.
-   :heavy_minus_sign: remove `@arkweid/lefthook`.
-   :heavy_plus_sign: add `pre-push`.

## 3.0.0

-   :arrow_up: dependency upgrade.
-   :building_construction: type is now `module`, renamed `.js` to `.cjs`.

## 2.1.8

-   :arrow_up: dependency upgrade.

## 2.1.7

-   :arrow_up: dependency upgrade.

## 2.1.6

-   :arrow_up: dependency upgrade.

## 2.1.5

-   :arrow_up: dependency upgrade.
-   :wrench: better `peerDependencies` versioning.
-   :art: nicer fonts for typedoc docs.

## 2.1.4

-   :arrow_up: dependency upgrade.
-   :wrench: better eslint script config.

## 2.1.3

-   :arrow_up: dependency upgrade.

## 2.1.2

-   :arrow_up: dependency upgrade.

## 2.1.1

-   :arrow_up: dependency upgrade.

## 2.1.0

-   :wrench: set `proseWrap` to `"always"` in `.prettierrc.js` for better
    readability.
-   :wrench: set `jsx` to `"react"` in `.tsconfig.json` for better compatibility
    with ESM compilation.
-   :wrench: set `jsxFactory` to `"createElement"` in `.tsconfig.json` for
    better looking imports.

## 2.0.9

-   :bug: fix another bug with react rules 🤦🏻

## 2.0.8

-   :bug: fix bug with react rules.

## 2.0.7

-   :arrow_up: dependency upgrade.

## 2.0.6

-   :arrow_up: dependency upgrade.
-   :wrench: set new `singleAttributePerLine` option to `true` in
    `.prettierrc.js`.

## 2.0.5

-   :wrench: update naming conventions.

## 2.0.4

-   :arrow_up: dependency upgrade.
-   :wrench: update naming conventions.
-   :wrench: add `@typescript-eslint/no-redundant-type-constituents` and
    `@typescript-eslint/no-useless-empty-export` rules.

## 2.0.3

-   :fire: disable `@typescript-eslint/prefer-readonly-parameter-types` because
    of false positives 😔.

## 2.0.2

-   :arrow_up: dependency upgrade.

## 2.0.1

-   :wrench: update `package.json` `peerDependencies` to include `stylelint`.
-   :bug: include missing types.

## 2.0.0

-   :building_construction: change ESLint so it no longer requires user to
    install plugins.
-   :arrow_up: dependency upgrade.
-   :truck: move some `devDependencies` to `dependencies` or `peerDependencies`.
-   :wrench: update JSDocs rules so they aren't required.

## 1.1.9

-   :arrow_up: dependency upgrade.
-   :wrench: update `.eslintrc.js` to disable
    `@typescript-eslint/no-unnecessary-type-arguments` temporarily.

## 1.1.8

-   :arrow_up: dependency upgrade.
-   :wrench: update `.eslintrc.js` to not format quotes (leave that to
    `prettier`).

## 1.1.7

-   :arrow_up: dependency upgrade.

## 1.1.6

-   :arrow_up: dependency upgrade.

## 1.1.5

-   :arrow_up: dependency upgrade.

## 1.1.4

-   :arrow_up: dependency upgrade.
-   :wrench: update `.npmrc` to include [Gitmoji][gitmoji] when doing
    `npm version`.

## 1.1.3

-   :arrow_up: dependency upgrade.

## 1.1.2

-   :arrow_up: dependency upgrade.
-   :wrench: update `@typescript-eslint/prefer-readonly-parameter-types` to make
    it less annoying.

## 1.1.1

-   :arrow_up: dependency upgrade.

## 1.1.0

-   :heavy_plus_sign: add `eslint-plugin-jsdoc`.
-   :wrench: add rules for JSDocs.

## 1.0.12

-   :wrench: improve `package.json` `repository` field.

## 1.0.11

-   :arrow_up: dependency upgrade.
-   :wrench: update `.eslintrc.js` fixing conflicts and making it less strict.
-   :wrench: update `.eslintrc.react.js` fixing conflicts.
-   :memo: updated `README.md` with dependencies.

## 1.0.10

-   :arrow_up: dependency upgrade.

## 1.0.9

-   :arrow_up: dependency upgrade.

## 1.0.8

-   :bug: fix dependency versions.

## 1.0.7

-   :arrow_up: dependency upgrade.

## 1.0.6

-   :wrench: update `.eslintrc.js`: `ignoreImplicit` now for
    `functional/no-return-void`.
-   :wrench: update `.eslintrc.js`: disabled `functional/functional-parameters`.
-   :wrench: update `.eslintrc.js`: removed `import/no-default-export`.

## 1.0.5

-   :wrench: update `.tsconfig.json` so the module is `ESNext`.

## 1.0.4

-   :wrench: update `.tsconfig.json` so the target is `ES2020`.

## 1.0.3

-   :bug: fix `files` paths (not relative for some reason).

## 1.0.2

-   :bug: fix missing files by adding `.npmignore` file without build files.

## 1.0.1

-   :bulb: fix typos in the `README.md` file.

## 1.0.0

-   :sparkles: Initial commit.

<!-- References -->

[gitmoji]: https://gitmoji.dev/
[semver]: https://semver.org/
