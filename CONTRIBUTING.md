# Contributing to JSON-Logic

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [What should I know before I get started?](#what-should-i-know-before-i-get-started)
  - [Documentation](#documentation)
- [How to contribute code?](#how-to-contribute-code)
  - [Local Development](#local-development)
  - [Build](#build)
  - [Development tools](#development-tools)
- [Styleguides](#styleguides)
  - [JavaScript](#javascript)
  - [Git Commit Messages](#git-commit-messages)
  - [Git Hooks](#git-hooks)
  - [Editors](#editors)
- [Releasing a new version](#releasing-a-new-version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# What should I know before I get started?

- [`JsonLogic`](http://jsonlogic.com/)

## Documentation

This project is documented with markdown for users in [`README.md`](./README.md) and authors in 
[`CONTRIBUTING.md`](./CONTRIBUTING.md).

A [`CHANGELOG.md`](./CHANGELOG.md) is automatically generated based upon [**Conventional Commits**](https://www.conventionalcommits.org/).

A *Table of Contents* is automatically generated for both [`README.md`](./README.md) and [`CONTRIBUTING.md`] by utilising [`doctoc`](https://github.com/thlorenz/doctoc#readme).

You can also run `npm run toc` to manually trigger an update.

# How to contribute code?

If you want/need to make changes to this package please open a Pull-Request.

## Local Development

You can start a local development environment by running `npm run dev`.
This will incrementally build [`./example`](./example) and serve it.

## Build

Simply run `npm run build`.

## Development tools

- [Parcel](https://parceljs.org/)
- [rollup](https://rollupjs.org/)
- [Babel](https://babeljs.io/)
- [browserlist](https://github.com/browserslist/browserslist)
- [NPM](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

# Styleguides

## JavaScript

JavaScript is linted and autoformmated by a combination of [`prettier`](https://prettier.io/) and [`eslint`](https://eslint.org/).

We extend [**Airbnb's JavaScript Styleguide**](https://github.com/airbnb/javascript#readme) available as [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Git Commit Messages

This project utilizes [`commitlint`](https://commitlint.js.org/) to enforce [**Conventional Commits**](https://www.conventionalcommits.org/).

These rules form the basis for our [`CHANGELOG.md`](./CHANGELOG.md) and automatic versioning of releases.

## Git Hooks

We use [`husky`](https://github.com/typicode/husky#readme) and [`lintstaged`](https://github.com/okonet/lint-staged#readme) to enforce those styleguide rules for each commit.

## Editors

Basic configuration for various editors is provided by an [`editorconfig`](https://editorconfig.org/) file.

# Releasing a new version

We stick to [**semantic versioning**](https://semver.org/) and use [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/) to automatically generate a valid version, a [`CHANGELOG.md`](./CHANGELOG.md) and to [`publish`](https://docs.npmjs.com/cli/publish) a new version to NPM [here](https://www.npmjs.com/package/@axa-ch/aletheia-zoid).

Simply run `npm run release`.
