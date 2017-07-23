var express = require('express');
var router = express.Router();
var MakeService = require('./service/MakeService');
var makes = [
    {
        makeName: 'Ford',
        models: [
            {
                modelName: 'Edge',
                imageUrl : "https://cars.usnews.com/static/images/Auto/izmo/310180/2010_ford_edge_angularfront.jpg"
            },
            {
                modelName: 'Escape',
                imageUrl : "https://cars.usnews.com/static/images/Auto/izmo/i5468/2016_ford_escape_sideview.jpg"
            }
        ]
    },
    {

        makeName: 'Acura',
        models: [
            {
                modelName: 'ILX',
                imageUrl : "https://cars.usnews.com/static/images/Auto/izmo/i2314400/2017_acura_ilx_sideview.jpg"
            },
            {
                modelName: 'MDX',
                imageUrl : "https://cars.usnews.com/static/images/Auto/izmo/i5302/2016_acura_mdx_angularfront.jpg"
            }
        ]
    }
];


MakeService.addMake(makes, function (error, jsonData) {});

router.get('/v1/api/makelist', function(req, res){
    var jsonParam = {};
    MakeService.getMakeList(jsonParam, function (error, jsonData) {
        if (error) {
            res.send(500, { error: 'Internal Service Error' });
        } else{
            res.json(jsonData);
        }
    });
});

router.post('/v1/api/makedetail', function(req, res){
    var jsonParam = {
        makeName: req.body.makeName
    };
    MakeService.MakeDetail(jsonParam, function (error, jsonData) {
        if (error) {
            res.send(500, { error: 'Internal Service Error' });
        } else{
            res.json(jsonData);
        }
    });
});

module.exports = router;