# css-module-npm-boilerplate

[![npm version](https://badge.fury.io/js/css-module-npm-boilerplate.svg)](https://badge.fury.io/js/css-module-npm-boilerplate)

A boilerplate [css module](https://github.com/css-modules/css-modules).

Fork this and create your own reusable css module to be imported into react, deku, riot, etc... components.

![](https://raw.githubusercontent.com/StevenIseki/css-module-npm-boilerplate/master/screenshot.png)

Check out more css modules at [cssmodul.es](http://cssmodul.es)

## Compatible

CSS Modules is only compatible with camelCase. However deku and react have mappings to use *normal* class names.

This module has only camelCase classes so is compatible with:

- [css modules](https://github.com/css-modules/css-modules)
- [react-css-modules](https://github.com/gajus/react-css-modules)
- [deku-css-modules](https://github.com/StevenIseki/deku-css-modules)

## Install

`npm install css-module-npm-boilerplate --save-dev`

## Usage

`import fancyButton from 'css-module-npm-boilerplate'`

The fancy button css module has a `.button` and a color style `.blue`, `.green` or `.red`.

Add the classes to your elements to use the styles... 

**css modules**

```jsx
	return (
        <button className={styles.button + ' ' + styles.blue }>press me</button>
    );
```

**react / deku css modules**

```jsx
	return (
        <button styleName='button blue'>press me</button>
    );
```

## Example

Check out an example of using this css module [here](https://github.com/StevenIseki/css-module-npm-boilerplate/tree/master/example)

**Run it**

`cd example; npm install; npm start`

## Development

This is a simple version which just exports the button.css module, so there is no build step. If you wished to have multiple css modules exported, export the following from your index.js

```js
var alerts = require('./lib/alerts.css'); 
var buttons = require('./lib/buttons.css'); 

module.exports = {
	buttons: buttons,
	alerts: alerts
};
```

If you want to use less, or autoprefixer or post-css in your css module use gulp or webpack as a build step, check out:

- [css-module-npm-boilerplate-webpack](https://github.com/StevenIseki/css-module-npm-boilerplate-webpack)
- [css-module-npm-boilerplate-gulp](https://github.com/StevenIseki/css-module-npm-boilerplate-gulp)


## License

MIT
