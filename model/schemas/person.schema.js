/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
/**Schema creation */
const personSchema = new mongoose.Schema({
    id:{
        type : "String",
        require : true,
        unique : true
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
    direction:{
        type : "String",
        require : true
    },
    phone:{
        type : "Number",
        require : true
    },
    email:{
        type : "String",
        require : true,
        unique : true
    },
});

/**schema exportation */
personSchema.plugin(validator);
module.exports = personSchema;