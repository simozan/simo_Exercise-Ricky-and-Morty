const mongoose = require ("mongoose")
const Character = require ("./character.model")
require("dotenv").config()
const Mongdb_URI=process.env.MONGO_DB_URI
mongoose.connect(Mongdb_URI)
.then(()=> console.log("connected to mongoose"))
.catch((error)=> console.log("error!!",error))


fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    //.then((response)=> console.log(response))
    .then((jsonData) => {
        const cleanArray = [];
        jsonData.results.forEach(character => {
            const {name, image}=character;
            const newObject ={name, imageUrl:image}
            cleanArray.push(newObject)
        });
        return cleanArray;
    })
    .then ((cleanedArray)=>{
        return Character.insertMany(cleanedArray)
    })
    .catch((error)=>console.log("error!!", error))

