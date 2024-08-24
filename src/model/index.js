import mongoose from "mongoose";
import 'dotenv/config.js'

// const DB_Password = encodeURIComponent(process.env.PASSWORD);
// ${process.env.MONGODB_USER}${DB_Password}${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DB}

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`).then((value)=>
    console.log("Mongodb connected")
    ).catch((error)=>console.log(error));

    export default mongoose