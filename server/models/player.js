var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
  PlayerSchema    = new mongoose.Schema({
        username: {
                type: String,
                required: [true,'UserName is empty'],
                },

        score: {
                type: Number,
                },
        avatar: {
                type: String,
                }
       
 
}
,{ timestamps: true } );



var Player= mongoose.model('Player', PlayerSchema);
