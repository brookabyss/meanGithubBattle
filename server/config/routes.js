var mongoose = require('mongoose');
var Player = mongoose.model('Player')
var players= require('../controllers/players.js')
var path = require("path");
var body= require("body-parser")
module.exports= function(app){

  app.post('/create', function(req, res, next) {
    console.log("inside service")
    players.create(req,res)
  })
  app.get('/players', function(req, res, next) {
    console.log('show route')
    players.show(req,res)
  })
  // app.post('/players/delete',function(req, res, next) {
  //   console.log("route delete")
  //   players.delete(req,res)
  // })
  // app.post('/player/update',function(req, res, next) {
  //   console.log("route update",req.body.player._id)
  //   players.update(req,res)
  // })
 

  app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
  
  

}
