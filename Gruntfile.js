module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Project configuration
    // ---------------------

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
    },

    yuidoc: {
      compile: {
        'name': '<%= pkg.name %>',
        'description': '<%= pkg.description %>',
        'version': '<%= pkg.version %>',
        'url': '<%= pkg.url %>',
        options: {
          paths: '.',
          outdir: 'report/api/'
        }
      }
    },

    nodeunit: {}

  });

  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

};
