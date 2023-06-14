import mongoose from "mongoose";

const Post = new mongoose.Schema({
    nama: {type:String, required:true},
    prompt:{type:String, required:true},
    photo:{type:String, required:true},
})

const PostSchema = mongoose.model('Post',Post)

export default PostSchema