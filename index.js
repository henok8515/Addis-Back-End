import express, { application } from 'express'
import  mongoose from 'mongoose'
import cors from 'cors';
import  postRoute from './routes/post.js';


const app=express()
const port =process.env.PORT || 5000;



app.use(cors());
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))

app.use('/post' ,postRoute)

const CONNECTION_URL='mongodb+srv://henok:he0943851525@cluster0.dpdnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, })
.then(()=>app.listen(port ,()=>{
    console.log(`runing on port ${port}`)
}))
.catch((error)=> {
    console.log(error.message);
} )

app.get('/',(req, res)=>{res.send('hello')
console.log('home');
})



