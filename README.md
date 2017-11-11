# vue-fdn

> A Vue.js project (with Foundation for Sites 6.4)

This project was generated with `vue init webpack vue-fdn`.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Add Foundation

``` bash
# add SCSS support to Webpack
npm i -D sass-loader node-sass

# install Foundation
npm i -S foundation-sites

# install Motion UI (optional)
npm i -S motion-ui
```

## Modify *src/main.js*

``` javascript
// add to import statements at top of file
import Foundation from 'foundation-sites'

// add before new Vue()...
Vue.prototype.$foundation = Foundation
```

## Integrate jQuery

In *build/webpack.base.conf.js* add `webpack` and `jquery` requires at the top of the file

``` javascript
var webpack = require('webpack')
var jquery = require('jquery')
```

then add a `plugins` property to `modules.exports`:

``` javascript
  plugins: [
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery'
    })
  ]
```

In *.eslintrc.js* add `jquery: true` to the `env` property.

## Add styles

Create directory *src/styles*. Copy *node_modules/foundation-sites/scss/settings/_settings.scss* into this new directory and [tweak it to your liking](https://foundation.zurb.com/sites/docs/sass.html#the-settings-file). In this same directory, create a new file, *style.scss*, and make it look like this:

``` scss
@import 'settings';
@import 'foundation';
@import 'motion-ui'; // optional

@include foundation-everything;
@include motion-ui-transitions; // optional
```

In *build/utils.js*, modify the `scss` loader configuration (line 53-ish) to look like:

``` javascript
    scss: generateLoaders('sass', {
      includePaths: [
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src/' // optional
      ]
    }),
```

In the app's main component file (*App.vue*), add the attribute `lang="scss"` to the style tag, and add `@import 'styles/style';` to the style section. This should cover all sub-components, i.e. no need to use `@import 'styles/style';` anywhere else.

Merge [Foundation's Autoprefixer browsers settings](https://foundation.zurb.com/sites/docs/sass.html#autoprefixer-required) into the existing `browserslist` in *package.json*:

``` json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "ie >= 9",
    "and_chr >= 2.3"
  ]
```

## Use Foundation JS in Vue Components

In a Vue component, add `mounted ()` to create a Foundation object from a jQuery object, and `destroyed ()` to clean it up. Check out the *src/components* directory for examples.

Executing `npm run build` will give the error:
``` bash
Unexpected character '`' [./~/foundation-sites/js/foundation.util.core.js:24,0]
```

To address this error, modify *build/webpack.base.conf.js* to include the Foundation for Sites folder in `babel-loader` config:

``` javascript
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/foundation-sites')
        ]
      },
```
