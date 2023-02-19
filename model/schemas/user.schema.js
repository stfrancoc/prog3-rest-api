/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
/**Schema creation */
const userSchema = new mongoose.Schema({
    name:{
        type : "String",
        require : true
    },
    lastname:{
        type : "String",
        require : true
    },
    username:{
        type : "String",
        require : true,
        unique : true
    },
    password:{
        type : "String",
        require : true
    },
    rol:{
        type : "Number",
        require : true
    }
});

/**schema exportation */
userSchema.plugin(validator);
module.exports = userSchema;