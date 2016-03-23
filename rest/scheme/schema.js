var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var contents = new schema({
    id : Number,
    title : String,
    author : String,
    author_type : String,
    author_thumbnail : String,
    create_date : {type : Date, default : Date.now},
    update_date : {type : Date, default : Date.now},
    meta : {
        facebook : [Boolean, String],
        twitter : [Boolean, String],
        kakao : [Boolean, String],
        homepage : [Boolean, String],
        blog : [Boolean, String],
        email : [Boolean, String],
        comment : [Boolean, String]
    },
    content : String
});