'use strict';

angular.module('<%= app_section_name %>',[])  
  .factory('factoryName',function(){
    return{
      get: function(callback){
        //Do something
      },
      set: function(key, value, callback){
        //Do something
      }
    };
  });