'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');

var YoYoGenerator = yeoman.generators.Base.extend({
   constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag
  },
    promptUser: function() {
        var done = this.async();
 
        // Have Yeoman greet the user.
        this.log(yosay(
          'Welcome to the perfect ' + chalk.red('generator-yoyo') + ' generator!'
          ));
        
        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        },{
            type: 'confirm',
            name: 'addDemoSection',
            message: 'Would you like to generate a demo section ?',
            default: true
        }];
 
        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.addDemoSection = props.addDemoSection;
   
            done();
        }.bind(this));
    },
  scaffoldFolders: function(){
    console.log("scaffoldFolders");
    this.destinationPath("app");
    this.destinationPath("app/css");
    this.destinationPath("app/sections");
    this.destinationPath("build");
    // this.mkdirp("app");
    // this.mkdirp("app/css");
    // this.mkdirp("app/sections");
    // this.mkdirp("build");
  },
  copyMainFiles: function(){
    console.log("copyMainFiles");
    this.copy("_footer.html", "app/footer.html");
    this.copy("_gruntfile.js", "Gruntfile.js");
    this.copy("_package.json", "package.json");
    this.copy("_main.css", "app/css/main.css");    

    var context = { 
      site_name: this.appName 
    };

    this.template("_header.html", "app/header.html", context);
  },
  generateDemoSection: function(){
    console.log("generateDemoSection");
    if (this.addDemoSection) {
      var context = {
        content: "Demo Section",
        id: "DemoSection"
      }

      var fileBase = Date.now() + "_" + "demo_section";
      var htmlFile = "app/sections/" + fileBase + ".html";
      var cssFile  = "app/css/" + fileBase + ".css"; 

      this.template("_section.html", htmlFile, context);
      this.template("_section.css", cssFile, context);
    }
  },
  writing: function () {
    console.log("writing");
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: 'Templating with Yeoman' }
    );
  },
  runNpm: function(){
    console.log("runNpm");
    var done = this.async();
    this.npmInstall("", function(){
      console.log("\nEverything Setup !!!\n");
      done();
    });
  }
});

module.exports = YoYoGenerator;
