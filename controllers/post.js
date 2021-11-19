import postMessage from '../models/postMessage.js';


export const getPost=async (req, res)=>{
    try {
        const postMessages=await postMessage.find()

        res.send(postMessages)
    } catch (error) {
        console.log(error);
    }
}


export const createPost= async (req,res)=>{
    const post=req.body

    const newPost= new postMessage(post)
  try {
      await newPost.save()

      res.status(201 ).json(newPost )
  } catch (error) {
      res.status(409).json({message: error.message})
  }
}