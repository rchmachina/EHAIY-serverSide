import express from 'express';
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'


import Post from '../monggodb/models/post.js';
dotenv.config()
const router = express.Router()

router.route('/').get((req, res) =>{
    res.send('holla')
})
export default router
