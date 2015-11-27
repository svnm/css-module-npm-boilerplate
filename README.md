# css-module-npm-boilerplate

[![npm version](https://badge.fury.io/js/css-block-loader.svg)](https://badge.fury.io/js/css-block-loader)

A boilerplate [css module](https://github.com/css-modules/css-modules). Fork this and create your own reusable css module to be imported into react, deku, riot, etc... components.

![](https://raw.githubusercontent.com/StevenIseki/css-module-npm-boilerplate/master/screenshot.png)

## Compatible

CSS Modules is only compatible with camelCase. However deku and react have mappings to use normal class names.

- [css modules](https://github.com/css-modules/css-modules)
- [react-css-modules](https://github.com/gajus/react-css-modules)
- [deku-css-modules](https://github.com/StevenIseki/deku-css-modules)

## Install

`npm install css-module-npm-boilerplate --save-dev`

## Usage

this is really just a simple example css module for a button.


`import fancyButton from 'css-module-npm-boilerplate'`

Then add the following classes to use the styles...

*css modules*

```jsx
	return (
        <button className={styles.button} />
        press me
        </button>
    );
```

*react / deku css modules*

```jsx
	return (
        <button styleName='button' />
        press me
        </button>
    );
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/css-module-npm-boilerplate/tree/master/example)

**Run it**

`cd example; npm install; npm start`

## License

MIT