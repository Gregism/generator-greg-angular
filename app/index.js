'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  askQuestions: function(){
    
    var done = this.async();

    this.prompt([{
      type: 'input',
      name: 'name',
      message: 'What do you want to call your project (nospaces)?',
      default: this.appname //Default to folder name
    },
    {
      type: 'input',
      name: 'title',
      message: 'What would you like the title to be (user visible)?',
      default: this.appname //Default to folder name
    }],function(answers){
      this.appSectionName = answers.name;
      this.appSectionTitle = answers.title;
      this.log(answers.title + ' has been created as ' + answers.name + '!');
      done();
    }.bind(this));
  },
  makeFolders: function () {
    this.mkdir('app');
    this.log('app folder created!');
    this.mkdir('app/images');
    this.log('app/images folder created!');
    this.mkdir('app/scripts');
    this.log('app/scripts folder created!');
    this.mkdir('app/scripts/controllers');
    this.log('app/scripts/controllers folder created!');
    this.mkdir('app/scripts/factories');
    this.log('app/scripts/factories folder created!');
    this.mkdir('app/styles');
    this.log('app/styles folder created!');
    this.mkdir('app/views');
    this.log('app/views folder created!');
  },
  makeFiles: function(){
    var context = {
      app_section_name: this.appSectionName,
      app_section_title: this.appSectionTitle
    };

    this.template('_index.html','index.html', context);
    this.log('index.jsp created!');

    this.template('scripts/_app.js','app/scripts/app.js', context);
    this.log('app/scripts/app.js created!');

    this.copy('styles/_main.css', 'app/styles/main.css');
    this.log('app/styles/main.css created!');

    this.template('views/_main.html','app/views/main.html', context);
    this.log('app/views/main.html created!');

    this.template('scripts/controllers/_main.js','app/scripts/controllers/'+ this.appSectionName +'.js', context);
    this.log('app/scripts/controllers/'+ this.appSectionName +'.js created!');

    this.template('scripts/factories/_factories.js','app/factories/factories/factories.js', context);
    this.log('app/scripts/factories/factories.js created!');
  }
});