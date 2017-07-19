var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports ={// if errors ,send errors
  
  create: function(req,res){
    console.log("create function",req.body.username)
    let player= new Player({username: req.body.username,score: req.body.score,avatar: req.body.avatar })
    player.save(function(err){
          if (err){
            console.log("Inside register error",err)
            res.json(false)
          }
          else{
            
            res.json(true)
          }
        })
  },
  show: function(req,res){
    console.log("show method")
    Player.find({},function(err,players){
      if (err){
        console.log(err)
        res.json(err)
      }
      else{
        console.log("Please",players)
        res.json(players)
      }
        
    })
  },
  // delete: function(req,res){
  //   Player.find({_id: req.body.id}).remove().exec()
  //   res.json(true)
  // },
  // update: function(req,res){
  // Player.findById(req.body.player._id, function(err,player){
  //   if (err){
  //     console.log("error",err)
  //   }
  //   else{
  //     player.game=req.body.player.game
  //     player.save(function(err){
  //       if (err){
  //         console.log("error",err)
  //       }
  //       else{
  //         console.log("success")
  //       }
  //     })
  //   }
  // })
  // }
      
}
