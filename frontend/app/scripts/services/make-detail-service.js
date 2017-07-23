'use strict';

angular.module('frontendApp')
  .service('MakeService', function ($http) {
      var baseUrl = 'http://localhost:3000/v1/api/';
      this.makeList = function(cb) {
        $http({
            method: 'GET',
            url: baseUrl + 'makelist'
            }).then(function successCallback(response) {
               cb(null, response.data)
            }, function errorCallback(response) {
               cb('error', response.dat)
        });
     }

     this.makeDetail = function(makeName, cb) {
        $http({
            method: 'POST',
            url: baseUrl + 'makedetail',
            data: { makeName:  makeName}
            }).then(function successCallback(response) {
               cb(null, response.data)
            }, function errorCallback(response) {
               cb('error', response.data)
        });
     }
  })
