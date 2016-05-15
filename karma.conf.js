module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    reporters: ['spec', 'coverage'],
    browsers: ['PhantomJS'],
    plugins: ['karma-jasmine', 'karma-browserify', 'karma-spec-reporter', 'karma-phantomjs-launcher', 'karma-coverage'],
    files: [
      'src/game/**/*.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/game/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    autoWatch: true,
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },
    browserify: {
      debug: true,
      transform: ['imgurify', 'browserify-istanbul']
    }
  });
};
