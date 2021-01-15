//Declaring all the dependencies
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
//mongoimport --db=movies  --collection=movies --file="movies.json" --jsonArray // Used this command to create a database and collection from the JSON file I had with movies.

var url = "mongodb://localhost:27017/movies";

// get pages

router.get('/', function(req, res, next){
    res.render('index.html')
});

router.get('/', function(req, res, next){
    res.render('disney.html')
});

router.get('/', function(req, res, next){
    res.render('hulu.html')
});

router.get('/', function(req, res, next){
    res.render('netflix.html')
});

router.get('/', function(req, res, next){
    res.render('prime_video.html')
});
//Get method
router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('movies').find();
        cursor.forEach(function(doc, err){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render('index.html', 'hulu.html', 'netflix.html', 'prime_video', {items: resultArray});
        });

    });
});
// Post methods
router.post('/insert', function(req, res, next){
    var item = {
        id: req.body.id,
        title: req.body.title,
        year: req.body.year,
        age: req.body.age,
        imdb: req.body.imdb,
        rotten_tomatoes: req.body.rotten_tomatoes,
        netflix: req.body.netflix,
        hulu: req.body.hulu,
        prime_video: req.body.prime_video,
        disney: req.body.disney,
        type: req.body.type,
        directors: req.body.directors,
        genres: req.body.genres,
        country: req.body.country,
        language: req.body.language,
        runtime: req.body.runtime
    };
    res.redirect('/');

    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('movies').insertOne(item, function(err, result){
            console.log('Item inserted');
            db.close();
});

router.post('/update', function(req, res, next){
    var item = {
        id: req.body.id,
        title: req.body.title,
        year: req.body.year,
        age: req.body.age,
        imdb: req.body.imdb,
        rotten_tomatoes: req.body.rotten_tomatoes,
        netflix: req.body.netflix,
        hulu: req.body.hulu,
        prime_video: req.body.prime_video,
        disney: req.body.disney,
        type: req.body.type,
        directors: req.body.directors,
        genres: req.body.genres,
        country: req.body.country,
        language: req.body.language,
        runtime: req.body.runtime
    };
    res.redirect('/');



mongo.connect(url, function(err, db){
    assert.equal(null, err);
    db.collection('movies').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result){
        console.log('Item updated');
        db.close();
    });
});
});

router.post('/delete', function(req, res, next){
var id = req.body.id;
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('user-data').deleteOne({"_id": objectId(id)}, function(err, result){
            console.log('Item deleted');
            db.close();
        });
    });
});



module.exports = router;