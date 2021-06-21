import mongoose from 'mongoose';

mongoose.connect(process.env.DB_STRING!, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err)=>{
    if(err) throw err;
    console.log(`connected to DB`);
  }
)