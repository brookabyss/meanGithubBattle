var mongoose     = require('mongoose'),
  Schema    = mongoose.Schema,
  PlayerSchema    = new mongoose.Schema({
        name: {
                type: String,
                required: [true,'Name is empty'],
                minlength: [2, "Name needs to be at least 4 characters in length."],
                },

        position: {
                type: String,
                },
        game: {
                1:{
                        status: {type: String, default: false}
                },
                2:{
                        status: {type: String, default: false}
                },
                3:{
                        status: {type: String, default: false}
                }
        }
 
}
,{ timestamps: true } );



var Player= mongoose.model('Player', PlayerSchema);
