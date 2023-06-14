import express from 'express';
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import { Configuration,  OpenAIApi } from 'openai';

 
const router = express.Router()
dotenv.config
const configuration = new Configuration({
    apiKey : process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(Configuration)
router.route('/').get((req, res) =>{
    res.send('holla')
})

export default router