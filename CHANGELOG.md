# Change log

All notable changes to this project will be documented in this file.

-   This project adheres to [Semantic Versioning][semver].
-   This project uses [Gitmoji][gitmoji]

## 5.1.3

-   🔧 update `tsconfig.json` and `typescript.config.json` files.

## 5.1.2

-   ⬆️ dependency upgrade.

## 5.1.1

-   ⬆️ dependency upgrade.

## 5.1.0

-   ⬆️ dependency upgrade.
-   🏗️ make `./dependencies.js` into a `bin` that can be used from elsewhere to
    align peers (and also rename it to `update-peers.js`).

## 5.0.2

-   ⬆️ dependency upgrade.
-   🔧 omit `Element` from the `read-only` check of params.

## 5.0.1

-   ⬆️ dependency upgrade.
-   🔧 omit `HTMLElement`, `Event` and `Node` from the `read-only` check of
    params (once `@vangware/dom` is created, this might no longer be necessary).

## 5.0.0

-   ⬆️ dependency upgrade (might be breaking changes because of Prettier).

## 4.3.15

-   ⬆️ peer dependency upgrade.

## 4.3.14

-   🔧 update `stylelint.config.cjs` to include the order plugin.
-   ⬆️ dependency upgrade (not fully, still waiting for eslint/prettier to be
    compatible with prettier@3).

## 4.3.13

-   ⬆️ dependency upgrade.

## 4.3.12

-   ⬆️ dependency upgrade.

## 4.3.11

-   ⬆️ dependency upgrade.

## 4.3.10

-   ⬆️ dependency upgrade.
-   ✏️ minor tweaks.

## 4.3.9

-   ⬆️ dependency upgrade.
-   🔧 update `prettier.config.cjs` to care about white space in HTML.

## 4.3.8

-   🔧 back to `node@>=20` babyyyy!

## 4.3.7

-   🔧 update `engines` to suggest `node@>=19` (something isn't right with
    `node@20` at the moment).

## 4.3.6

-   🔧 update `engines` to suggest `node@>=20` and `pnpm@>=8`.

## 4.3.5

-   ⬆️ dependency upgrade.

## 4.3.4

-   ⬆️ dependency upgrade.
-   📝 update `README.md` with a few improvements here and there.

## 4.3.3

-   ⬆️ dependency upgrade.

## 4.3.2

-   🎨 update styles for typedoc.

## 4.3.1

-   🔧 updated `peerDependencies`.

## 4.3.0

-   ⬆️ dependency upgrade.
-   🏷️ fixed internal JSDoc types.
-   🏗️ update internal exports to be plain objects when is a single config.
-   🔧 updated **stylelint** config, adding a bunch of new rules.

## 4.2.2

-   ⬆️ dependency upgrade.
-   🏗️ use `Object.freeze` in exported values of `.cjs` files.
-   🍱 add `favicon.ico` for the docs.
-   🏗️ docs now come from a GitHub action.

## 4.2.1

-   🐛 fix exports for JSON files.

## 4.2.0

-   ⬆️ dependency upgrade.
-   ✨ add new `dependencies.js` file to keep peerDependencies in check.
-   🔧 update `package.json` to use `dependencies.js`.
-   🏗️ update `index.js` to export JSON config files as well.
-   🐛 remove `index.cjs` from `package.json` and the `main` field.

## 4.1.6

-   ⬆️ dependency upgrade.

## 4.1.5

-   ⬆️ dependency upgrade (finally TS 5.0.3).

## 4.1.4

-   ⬆️ dependency upgrade.
-   🔧 update TSConfig to include `jsxFragmentFactory`.

## 4.1.3

-   ⬆️ dependency upgrade (new TypeScript!).
-   📝 update docs.

## 4.1.2

-   ⬆️ dependency upgrade.

## 4.1.1

-   🐛 "un-ban" `Function` (banned by default in `@typescript-eslint`).

## 4.1.0

-   🔧 update eslint TypeScript configs to stop banning `Function` and `object`
    types (an update for `@vangware/types` is coming with some breaking
    changes).

## 4.0.6

-   ⬆️ dependency upgrade.

## 4.0.5

-   ⬆️ dependency upgrade.

## 4.0.4

-   ⬆️ dependency upgrade.

## 4.0.3

-   ⬆️ dependency upgrade.
-   🔧 update eslint core config to use the new `@eslint/js`. For some reason
    it's written in CJS 🤷‍♂️

## 4.0.2

-   ⬆️ dependency upgrade.

## 4.0.1

-   ✏️ fix some typos.
-   🔧 fix prettier rules config.

## 4.0.0

-   ⬆️ dependency upgrade.
-   🚚 rename files from "rc" to `.config`.
-   🔥 remove `.editorconfig`.
-   ➖ remove `stylelint-config-prettier` (no longer needed for
    `stylelint@>15`).
-   🏗️ new flat config for ESLint.

## 3.4.7

-   🔧 Disable `functional/prefer-immutable-types` in favor of
    `@typescript-eslint/prefer-readonly-parameter-types`.
-   🔧 Re-enabled `@typescript-eslint/prefer-readonly-parameter-types` and
    `@typescript-eslint/no-unnecessary-type-arguments`.

## 3.4.6

-   🔧 update `package.json` homepage.`

## 3.4.5

-   ⬆️ dependency upgrade.
-   📝 update `README.md` with usage details.
-   📝 add public `docs` to have a public facing site for `@vangware/configs`.
-   ✏️ fix typos in `CHANGELOG.md`.
-   ✏️ fix typos in functional eslint configs.

## 3.4.4

-   ⬆️ dependency upgrade.

## 3.4.3

-   ⬆️ dependency upgrade.

## 3.4.2

-   ⬆️ dependency upgrade.

## 3.4.1

-   ⬆️ dependency upgrade.
-   🔧 update `@typescript-eslint/consistent-type-imports` to inline type
    imports.

## 3.4.0

-   ⬆️ dependency upgrade.

## 3.3.8

-   ⬆️ dependency upgrade.

## 3.3.7

-   ⬆️ dependency upgrade.

## 3.3.6

-   ⬆️ dependency upgrade.

## 3.3.5

-   ⬆️ dependency upgrade.

## 3.3.4

-   ⬆️ dependency upgrade.
-   📝 update `CHANGELOG.md` to use emojis instead of aliases.

## 3.3.3

-   ⬆️ dependency upgrade.

## 3.3.2

-   ⬆️ dependency upgrade.
-   🎨 typedoc styles update.

## 3.3.1

-   ⬆️ dependency upgrade.

## 3.3.0

-   ⬆️ dependency upgrade.
-   🔧 update functional rules to be a little less permissive with function
    arguments.
-   📝 update docs of configs to include links to packages for extra reference.

## 3.2.4

-   ⬆️ dependency upgrade.
-   🔧 add `"sideEffects": false` to `package.json`.

## 3.2.3

-   ⬆️ dependency upgrade.
-   🔧 update `package.json` to use glob patterns instead of going file by file.

## 3.2.2

-   ⬆️ dependency upgrade.

## 3.2.1

-   ⬆️ dependency upgrade.
-   🔧 update Prettier config for JSX/HTML/XML.

## 3.2.0

-   ⬆️ dependency upgrade.
-   🔧 update ESLint config.

## 3.1.12

-   ⬆️ dependency upgrade.

## 3.1.11

-   ⬆️ dependency upgrade.

## 3.1.10

-   ⬆️ dependency upgrade.

## 3.1.9

-   ⬆️ dependency upgrade.

## 3.1.8

-   ⬆️ dependency upgrade.

## 3.1.7

-   ⬆️ dependency upgrade.

## 3.1.6

-   🔧 better config for `functional/no-expression-statement`.

## 3.1.5

-   ⬆️ dependency upgrade.
-   🔧 update some configs.

## 3.1.4

-   ⬆️ dependency upgrade.

## 3.1.3

-   🎨 logo update.

## 3.1.2

-   ⬆️ dependency upgrade.
-   🔧 update `typedoc.json` to omit `entryPoints` and `includeVersion`.
-   ➖ remove `eslint-plugin-ban`.

## 3.1.1

-   🐛 fix issue with path to `customCss` in `typedoc.json`.

## 3.1.0

-   ⬆️ dependency upgrade.
-   ✨ add `typedoc.json` to share TypeDoc config across projects.

## 3.0.9

-   ⬆️ dependency upgrade.

## 3.0.8

-   ⬆️ dependency upgrade.

## 3.0.7

-   ⬆️ dependency upgrade.

## 3.0.6

-   ⬆️ dependency upgrade.

## 3.0.5

-   🔧 update `typedoc.css` updated matching last version of TypeDoc.

## 3.0.4

-   ⬆️ dependency upgrade.

## 3.0.3

-   ⬆️ dependency upgrade.

## 3.0.2

-   ➖ remove `pre-push`.
-   ➕ add `@evilmartians/lefthook`.

## 3.0.1

-   ⬆️ dependency upgrade.
-   ➖ remove `@arkweid/lefthook`.
-   ➕ add `pre-push`.

## 3.0.0

-   ⬆️ dependency upgrade.
-   🏗 type is now `module`, renamed `.js` to `.cjs`.

## 2.1.8

-   ⬆️ dependency upgrade.

## 2.1.7

-   ⬆️ dependency upgrade.

## 2.1.6

-   ⬆️ dependency upgrade.

## 2.1.5

-   ⬆️ dependency upgrade.
-   🔧 better `peerDependencies` versioning.
-   🎨 nicer fonts for typedoc docs.

## 2.1.4

-   ⬆️ dependency upgrade.
-   🔧 better eslint script config.

## 2.1.3

-   ⬆️ dependency upgrade.

## 2.1.2

-   ⬆️ dependency upgrade.

## 2.1.1

-   ⬆️ dependency upgrade.

## 2.1.0

-   🔧 set `proseWrap` to `"always"` in `.prettierrc.js` for better readability.
-   🔧 set `jsx` to `"react"` in `.tsconfig.json` for better compatibility with
    ESM compilation.
-   🔧 set `jsxFactory` to `"createElement"` in `.tsconfig.json` for better
    looking imports.

## 2.0.9

-   🐛 fix another bug with react rules 🤦🏻

## 2.0.8

-   🐛 fix bug with react rules.

## 2.0.7

-   ⬆️ dependency upgrade.

## 2.0.6

-   ⬆️ dependency upgrade.
-   🔧 set new `singleAttributePerLine` option to `true` in `.prettierrc.js`.

## 2.0.5

-   🔧 update naming conventions.

## 2.0.4

-   ⬆️ dependency upgrade.
-   🔧 update naming conventions.
-   🔧 add `@typescript-eslint/no-redundant-type-constituents` and
    `@typescript-eslint/no-useless-empty-export` rules.

## 2.0.3

-   🔥 disable `@typescript-eslint/prefer-readonly-parameter-types` because of
    false positives 😔.

## 2.0.2

-   ⬆️ dependency upgrade.

## 2.0.1

-   🔧 update `package.json` `peerDependencies` to include `stylelint`.
-   🐛 include missing types.

## 2.0.0

-   🏗 change ESLint so it no longer requires user to install plugins.
-   ⬆️ dependency upgrade.
-   🚚 move some `devDependencies` to `dependencies` or `peerDependencies`.
-   🔧 update JSDocs rules so they aren't required.

## 1.1.9

-   ⬆️ dependency upgrade.
-   🔧 update `.eslintrc.js` to disable
    `@typescript-eslint/no-unnecessary-type-arguments` temporarily.

## 1.1.8

-   ⬆️ dependency upgrade.
-   🔧 update `.eslintrc.js` to not format quotes (leave that to `prettier`).

## 1.1.7

-   ⬆️ dependency upgrade.

## 1.1.6

-   ⬆️ dependency upgrade.

## 1.1.5

-   ⬆️ dependency upgrade.

## 1.1.4

-   ⬆️ dependency upgrade.
-   🔧 update `.npmrc` to include [Gitmoji][gitmoji] when doing `npm version`.

## 1.1.3

-   ⬆️ dependency upgrade.

## 1.1.2

-   ⬆️ dependency upgrade.
-   🔧 update `@typescript-eslint/prefer-readonly-parameter-types` to make it
    less annoying.

## 1.1.1

-   ⬆️ dependency upgrade.

## 1.1.0

-   ➕ add `eslint-plugin-jsdoc`.
-   🔧 add rules for JSDocs.

## 1.0.12

-   🔧 improve `package.json` `repository` field.

## 1.0.11

-   ⬆️ dependency upgrade.
-   🔧 update `.eslintrc.js` fixing conflicts and making it less strict.
-   🔧 update `.eslintrc.react.js` fixing conflicts.
-   📝 updated `README.md` with dependencies.

## 1.0.10

-   ⬆️ dependency upgrade.

## 1.0.9

-   ⬆️ dependency upgrade.

## 1.0.8

-   🐛 fix dependency versions.

## 1.0.7

-   ⬆️ dependency upgrade.

## 1.0.6

-   🔧 update `.eslintrc.js`: `ignoreImplicit` now for
    `functional/no-return-void`.
-   🔧 update `.eslintrc.js`: disabled `functional/functional-parameters`.
-   🔧 update `.eslintrc.js`: removed `import/no-default-export`.

## 1.0.5

-   🔧 update `.tsconfig.json` so the module is `ESNext`.

## 1.0.4

-   🔧 update `.tsconfig.json` so the target is `ES2020`.

## 1.0.3

-   🐛 fix `files` paths (not relative for some reason).

## 1.0.2

-   🐛 fix missing files by adding `.npmignore` file without build files.

## 1.0.1

-   📝 fix typos in the `README.md` file.

## 1.0.0

-   ✨ Initial commit.

<!-- References -->

[gitmoji]: https://gitmoji.dev/
[semver]: https://semver.org/
