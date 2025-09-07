const mongoose=require('mongoose')

const connectToMongoDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connected to mongodb')
    }catch(err){
        console.log(err)
    }
}

module.exports={connectToMongoDb}