import mongoose from "mongoose"

const dbconnect = async() => {
    try{
        const conn= await mongoose.connect("mongodb://127.0.0.1:27017/test")
        console.log("Mongodb connected "+conn.connection.host)
    }
    catch(err){
        console.log("Mongo db not connected \n"+err.message)
        process.exit(1)
    }
}

export default dbconnect