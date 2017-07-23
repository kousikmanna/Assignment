'use strict';
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, MakeService) {
    $scope.selectedMakeName = "Select";
    $scope.selectedModelName = "Select";
    MakeService.makeList(function(err, data){
      if(!err && data){
        $scope.makeList = data;
      }
    })
   })