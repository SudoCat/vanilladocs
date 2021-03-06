'use strict';

module.exports = {
  dist: {
    options: {
      sourceMap: true
    , sourceMapURL: 'docs.css.map'
    , sourceMapFilename: '.tmp/assets/docs.css.map'
    }
  , files: {
      '.tmp/assets/docs.css': 'site/assets/css/docs.less'
    }
  }
};
