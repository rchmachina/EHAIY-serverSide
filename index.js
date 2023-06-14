import express  from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import ehyai from "./routes/ehyai.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config()
import connectDB from "./monggodb/connect.js";
const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/ehyai',ehyai)
app.use('/api/v1/postRoutes',postRoutes) 
app.get('/', async(req,res)=>{
    res.send('hello madafaka!')
    }

)



const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=> console.log('server already start onport localhost:8080'))
    }catch (e){
        console.log(e)
    }
   
} 

startServer()