module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    markdownlint: {
      options: {
        config: {
          'default': true,
          'MD003': {'style': 'atx'},
          'MD004': {'style': 'asterisk'},
          'MD007': {'indent': 4},
          'MD026': {'punctuation': '.,;:!'},
          'MD029': {'style': 'ordered'},
          'MD040': false,
          'MD041': false,
          'MD046': {'style': 'fenced'},
        }
      },
      src: [
        'content/en/**/*.md'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-markdownlint');

  grunt.registerTask('default', ['markdownlint']);

};
