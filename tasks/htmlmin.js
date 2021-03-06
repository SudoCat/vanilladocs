'use strict';

module.exports = {
  dist: {
    options: {
      collapseBooleanAttributes: true
    , collapseWhitespace: true
    , minifyCSS: true
    , removeAttributeQuotes: true
    , removeCommentsFromCDATA: true
    , removeEmptyAttributes: true
    , removeOptionalTags: true
    , removeRedundantAttributes: true
    , useShortDoctype: true
    }
  , files: [{
      expand: true
    , cwd: 'dist'
    , src: '**/*.html'
    , dest: 'dist'
    }]
  }
};
