/** packages */
const mongoose = require("mongoose");

/**Schema creation */
const carSchema = new mongoose.Schema({
    plate :{
        type : "String",
        require : true,
        unique : true
    },
    brand:{
        type : "String",
        require : true
    },
    model:{
        type : "String",
        require : true
    },
    year:{
        type : "Number",
        require : true
    },
    city:{
        type : "String",
        require : true
    },
    color:{
        type : "String",
        require : true
    },
    soat:{
        type : "String",
        require : true
    },
    person_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "coll_person",
        require : true
    },
});

/**schema exportation */
module.exports = carSchema;