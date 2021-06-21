import chalk from 'chalk'; // it makes colorful console.log()

import express, { Request, Response } from 'express';
import path from 'path';




// -------------------firing express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'client/build')));




// -------------------routes
app.get('*', (request: Request, response: Response)=>{
  console.log(request.url)
  response.json({ message: `The URL that you requested is NOT found!` })
});



// --------------------Listen
const PORT = process.env.PORT || 5000;
app.listen(5000, ()=>{
  console.log(`Server running on PORT ${ PORT }`);
})