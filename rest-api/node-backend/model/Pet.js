//now i am going to write the schema of the projects
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let Pet = new Schema ({
    breed:{
        type:String
    },
    category:{
        type:String
    },

    avgprice:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
},
{
    collection:'pets'
})
//dont forget to export module
module.exports = mongoose.model('Pet',Pet)