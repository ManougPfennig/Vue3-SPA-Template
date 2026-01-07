# Vue 3 Template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

---

# About the Axios API Wrapper

This module provides a lightweight wrapper around Axios to simplify HTTP requests in a Vue 3 application.  
It exposes a single `api` object that can be imported and used directly, without relying on `this` or Vue plugins.

The wrapper supports:
- All common HTTP methods
- Optional `onSuccess` and `onError` callbacks
- Promise-based usage (`async / await`)
- Runtime configuration of the Axios `baseURL`

---

## Features

- Import-based usage (`import api from ...`)
- Works with Vue 3 Composition API, Options API, and plain TypeScript files
- Optional success and error callbacks
- Promise-compatible (callbacks do not replace promises)
- Single shared Axios instance
- Dynamic base URL configuration (reverse-proxy friendly)

---

## Installation

Install Axios if it is not already installed:

`npm install axios`

You can also copy the `axios.ts` file into other projects.

---

## Base URL configuration

The Axios base URL must be configured once before making any requests.
This is typically done in `main.ts` or `App.vue`.

Example:

Set the base URL dynamically from the current website:

`const baseURL = new URL('/api', window.location.origin).toString()`  
`api.setBaseURL(baseURL)`

This setup works well when using a reverse proxy.

---

## Basic usage

Import the `api` object wherever you need to make HTTP requests:

`import api from '@/services/axios'`

---

## Supported HTTP methods

The following methods are available:

- `api.get(url, onSuccess?, onError?)`
- `api.post(url, data?, onSuccess?, onError?)`
- `api.put(url, data?, onSuccess?, onError?)`
- `api.patch(url, data?, onSuccess?, onError?)`
- `api.delete(url, onSuccess?, onError?)`

All methods return a Promise and optionally accept success and error callbacks.

---

## Error handling

- If an `onError` callback is provided, it will be called when the request fails.
- Errors are still thrown, so they can also be handled using `try / catch` or `.catch()`.

This allows both callback and promise patterns to coexist.

---

## Notes

- Callbacks receive the full Axios response or error object.
- `response.data` contains the actual API payload.
- The wrapper does not modify Axios behavior; it only standardizes usage.

---

## Extending the wrapper

The wrapper can be extended with:

- Global request/response interceptors
- Authentication token helpers
- Automatic retries
- Typed API modules

The API surface is explicit and consistent, so extensions can be added without breaking existing code.
