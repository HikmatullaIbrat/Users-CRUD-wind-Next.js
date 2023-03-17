const MONGO_URI = "mongodb+srv://hikmatullahibrat:RzjaxR1joEuwdfa4@cluster0.crjdprf.mongodb.net/?retryWrites=true&w=majority"
import mongoose from "mongoose";
const connectMongo = async() =>{

    try{
       const {connection} =await mongoose.connect(MONGO_URI)

       if(connection.readyState === 1){
        console.log("Database connected");
       };
    }catch(errors){
        return Promise.reject(errors)
    }

}

export default connectMongo;