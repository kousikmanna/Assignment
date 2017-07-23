var make = require('../model/make');

function MakeService(){
    console.log('CarService constructor function');
}

MakeService.prototype.addMake = function(jsonParam, callback){
    jsonParam.forEach(function(data){
       make.findOne({makeName:data.makeName}, function(err, jsonData){
          if(!jsonData){
              new make(data).save(function (error, data) { });
          }   
       })
    });
}

MakeService.prototype.getMakeList = function(jsonParam, callback){
    make.find({}, { _id: 0, makeName: 1, models: 1 }, function(err, jsonData){
        callback(err, jsonData)
    })
}

MakeService.prototype.MakeDetail = function(jsonParam, callback){
    make.findOne({makeName:jsonParam.makeName}, { _id: 0, makeName: 1, models: 1 }, function(err, jsonData){
        callback(err, jsonData)
    })
}

module.exports = new MakeService();