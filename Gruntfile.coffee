###
module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    coffee:
      dev:
        options:
          bare: true
        files:
          "build/gilded-rose.js": "src/*.coffee"
      test:
        options:
          bare: true
        files:
          "test/build/tests.js": "test/src/*.coffee"
    mocha:
      runner:
        src: ["test/runner.html"]
        options:
          run: true
    watch:
      all:
        files: ["src/*", "test/src/*"]
        tasks: ["build-dev", "build-test", "test"]

  grunt.loadNpmTasks("grunt-contrib-coffee")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-mocha")

  grunt.task.registerTask("test", "mocha")
  grunt.task.registerTask("build-dev", "coffee:dev")
  grunt.task.registerTask("build-test", "coffee:test")
  grunt.task.registerTask("watch", ["build-dev", "build-test", "test", "watch:runner"])
###
module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    coffee:
      dev:
        options:
          bare: true
        files:
          "build/gilded-rose.js": "src/*.coffee"
      test:
        options:
          bare: true
        files:
          "test/build/tests.js": "test/src/*.coffee"
    mocha:
      runner:
        src: ["test/runner.html"]
        options:
          run: true
    watch:
      all:
        files: ["src/*", "test/src/*"]
        tasks: ["coffee:dev", "coffee:test", "mocha:runner"]

  grunt.loadNpmTasks("grunt-contrib-coffee")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-mocha")
  grunt.task.registerTask("default", ["watch:all"])