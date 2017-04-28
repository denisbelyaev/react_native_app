var mongoose = require('./mongoose');
var Schema = mongoose.Schema;
var ShemaObjectId = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var bookSchema = new Schema({
    name:   {
        type:     String,
        // required: true,
        // unique:   true
    },
    description:   {
        type:     String,
        // required: true,
        // unique:   true
    },
    created: {
        type:    Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);

