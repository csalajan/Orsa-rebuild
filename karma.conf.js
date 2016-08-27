// Karma configuration
// Generated on Wed Nov 18 2015 19:24:56 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-messages/angular-messages.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/src/app.js',
        'app/src/constants/common.js',
        'app/src/**/*.spec.js',
        'app/src/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'**/app/src/**/!(*spec).js': ['coverage'],
      '**/app/src/**/*.js': ['webpack'],
      '**/app/src/**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage'],

    // code coverage
    coverageReporter: {
      "reporters": [
        {
          "type": "html",
          "dir" : 'app/coverage/'
        },
        {"type": "text-summary"}
      ],
      check: {
        global: {
          statements: 75,
          branches: 75,
          functions: 75,
          lines: 75
        }
      },
      watermarks: {
        statements: [50, 75],
        branches: [50, 75],
        functions: [50, 75],
        lines: [50, 75]
      }
    },

    webpack: {
      module: {
        postLoaders: [
          {
            test: /^((?!spec).)*\.js/,
            exclude: /(node_modules|resources\/js\/vendor)/,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS2'],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS2_custom': {
        base: 'PhantomJS2',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
