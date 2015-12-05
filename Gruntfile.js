module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    // imagemin
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'src/img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'src/img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'build/img/',
            ext: '.jpg'
          }
        ]
      }
     },

   dist: {                            // Target
     options: {                       // Target options
       style: 'expanded'
     },
     files: [{
       expand: true,
       cwd: 'src/css',
       src: ['*.sass'],
       dest: 'build/css/',
       ext: '.css'
     }]
   },

   serve: {
    options: {
        port: 9000
    }
}

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "imagemin" task.
  //http://blog.grayghostvisuals.com/grunt/image-optimization/
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
  // imagemin task(s)
  grunt.registerTask('image', ['imagemin']);
  grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
  grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
  grunt.registerTask('validateBootstrap', ['bootlint']);
  grunt.registerTask('css', ['sass']);
  grunt.loadNpmTasks('grunt-serve');


};