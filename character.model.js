const mongoose= require ("mongoose")

const Schema = mongoose.Schema 

const RiAnMoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Character = mongoose.model("character", RiAnMoSchema)
module.exports= Character