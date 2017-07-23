'use strict';

angular.module('frontendApp')
.directive('selectDropDown', function($document, MakeService){
      return {
        scope :{
          selectMakeOptions: '=',
          selectedMakeName: '=',
          selectModelOptions: '=',
          selectedModelName: '=',
          imageUrl: '='
        },
        restrict: 'E',
        templateUrl:'views/select.tpl.html',
        link: function(scope, element, attr){
          scope.showOptions = false;
          scope.showModelOptions = false;
          scope.showModelDetail = false;
          scope.showModelDescription = false;
          scope.toggleOptions = function(){
            scope.showOptions = !scope.showOptions;
            scope.showModelDetail = false;
          }
          scope.toggleModelOptions = function(){
            scope.showModelDetail = !scope.showModelDetail;
            scope.showOptions = false;
          }

          scope.selectOption = function(option){
            if(scope.selectedMakeName !== option.makeName){
                scope.selectedMakeName = option.makeName;
                scope.selectedModelName = "Select";
                scope.showModelOptions = true;
                scope.showModelDescription = false;
                MakeService.makeDetail(option.makeName, function(err, data){
                  if(!err && data){
                    scope.selectModelOptions = data.models;
                  }
                })
            }
          }

          scope.selectModelOption = function(option){
            scope.showModelDescription = true;
            scope.selectedModelName = option.modelName;
            scope.imageUrl = option.imageUrl;
          }
        }
      }
});
