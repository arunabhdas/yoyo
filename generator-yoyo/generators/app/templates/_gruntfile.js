




module.exports = function(grunt) {
  grunt.initconfig({
    //task config
  });
 
  grunt.loadnpmtasks('grunt-contrib-connect');
  grunt.loadnpmtasks('grunt-contrib-cssmin');
  grunt.loadnpmtasks('grunt-contrib-concat');
 
  grunt.registertask('serve', ['connect']);
  grunt.registertask('build', ['concat', 'cssmin']);
  grunt.registertask('default', ['build']);




};

