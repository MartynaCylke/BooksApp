# Books App

[![CI](https://github.com/MartynaCylke/BooksApp/actions/workflows/ci.yml/badge.svg)](https://github.com/MartynaCylke/BooksApp/actions/workflows/ci.yml)

A responsive browser application for exploring a book collection. Readers can
filter titles by audience and category and keep a personal list of favourites.

**[Open the live demo](https://martynacylke.github.io/BooksApp/)**

## Features

- combined category and audience filters;
- favourites toggled directly from the catalogue;
- visual filtering driven by book metadata;
- responsive layout built with Sass;
- accessible, dependency-light vanilla JavaScript interface.

## Requirements

- Node.js 20.19 or newer
- npm

## Installation

```bash
npm ci
```

## Development

```bash
npm run watch
```

## Verification

```bash
npm test
npm run build
```

The production-ready files are generated in `dist/`. CI repeats the full build
and dependency audit for every pull request.

## Tech stack

JavaScript, Handlebars, Sass, ESLint, Stylelint and GitHub Actions.
