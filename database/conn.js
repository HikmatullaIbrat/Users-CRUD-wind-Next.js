const MONGO_URI = "mongodb+srv://hikmatullahibrat:RzjaxR1joEuwdfa4@cluster0.crjdprf.mongodb.net/?retryWrites=true&w=majority"
import mongoose from "mongoose"
const connectMongo = async() =>{

    try{
        mongoose.connect(MONGO_URI)
    }catch(errors){
        return Promise.reject(errors)
    }

}