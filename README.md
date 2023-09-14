# Falcon Styles

Falcon Styles is a stylesheet with a light and dark theme and was developed primarily to satisfy the requirements of theming the Shoelace component library - see [Falcon Shoelace Theme](https://www.npmjs.com/package/@crowdstrike/falcon-shoelace).

That said, the goal of Falcon Styles is to be independent of any one component library and provide css custom-properties (variables) that could be used to style any UI.

## Installation and Usage

Add the `@crowdstrike/falcon-styles` package:

### NPM
```zsh
npm install @crowdstrike/falcon-styles
```

Import the stylesheet:

```css
@import "@crowdstrike/falcon-styles/dist/style.css";
```

## Switching Themes

By default all styles are in light mode. To switch to dark mode add the class `theme-dark` to `documentElement`.

```js
document.documentElement.classList.toggle('theme-dark')
```
```html
<html class="theme-dark"></html>
```

## Included Dependencies

The falcon-shoelace stylesheet includes:
* [modern-normalize](https://github.com/sindresorhus/modern-normalize)