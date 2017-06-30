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
```

## Modify *src/main.js*

``` javascript
// add to import statements at top of file
import Foundation from 'foundation-sites'

// add before new Vue()...
Vue.prototype.$foundation = Foundation
```

## Integrate jQuery

In *build\webpack.base.conf.js* add `webpack` and `jquery` requires at the top of the file

``` javascript
var webpack = require('webpack')
var jquery = require('jquery/dist/jquery.min.js')
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

In *src* directory create a *styles* directory. Copy *_settings.scss* from *node_modules\foundation-sites\scss\settings* to the newly-created *styles* directory. Create a file, *style.scss* (or whatever name you prefer), in the *styles* directory and make it look like this:

``` scss
@import 'settings';
@import '~foundation-sites/scss/foundation';

@include foundation-everything;
```

In *build/utils.js*, modify the `scss` loader configuration (line 53-ish) to look like:

``` javascript
    scss: generateLoaders('sass', {
      includePaths: ['node_modules/foundation-sites/scss']
    }),
```

In the app's main component file (*App.vue*), add the attribute `lang="scss"` to the style tag, and add `@import 'styles/style';` to the style section. This should cover all sub-components, i.e. no need to use `@import 'styles/style';` anywhere else.
