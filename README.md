# Iconify Icon Finder

Iconify Icon Finder is a package for searching icons. It uses Iconify API as a source, providing access to over 70,000 icons from over 80 icon sets, including all most popular icon sets, such as [Material Design Icons](https://iconify.design/icon-sets/mdi/), [Font Awesome](https://iconify.design/icon-sets/fa-solid/), [Unicons](https://iconify.design/icon-sets/uil/) and many others.

Icon Finder is used to:

- Build icon pickers, which can be used in website or theme customisers.
- Build demo website for icon sets, such as [Material Line Icons](https://cyberalien.github.io/line-md/) ([source code](https://github.com/cyberalien/line-md)).
- Build plug-ins for UI design tools, such as [Iconify for Figma](https://github.com/iconify/iconify-figma) and [Iconify for Sketch](https://github.com/iconify/iconify-sketch).

Icon finder repository has several packages:

## Core

Core is the main package. It does all searching and browsing, returns parsed and cleaned up API response as easy to use objects.

It is written in TypeScript and can be used in browser and in Node.js.

Links:

- ["core" branch](https://github.com/iconify/icon-finder/tree/core)
- [Documentation](https://docs.iconify.design/icon-finder/packages/core/)

## Svelte Components

Svelte Components package contains:

- Svelte components.
- Wrapper script that wraps and renders components, provides callback for easy communication. It can be used as main entry point for icon picker.
- Customisable stylesheet, written in SASS.
- Build scripts that are easy to customise.
- Language pack that is easy to translate.

Links:

- ["base-svelte" branch](https://github.com/iconify/icon-finder/tree/base-svelte)
- [Documentation](https://docs.iconify.design/icon-finder/packages/base-svelte/)

### Projects based on Svelte Components

Svelte components package should be used as base for your project, not as complete Icon Finder.

See [project forks](https://docs.iconify.design/icon-finder/packages/base-svelte/examples.html) for list of projects that are based on Svelte Components package.

# License

Iconify Icon Finder is dual-licensed under Apache 2.0 and GPL 2.0 license. You may select, at your option, one of the above-listed licenses.

`SPDX-License-Identifier: Apache-2.0 OR GPL-2.0`

© 2020 Iconify OÜ
