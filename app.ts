import chalk from 'chalk'; // it makes colorful console.log()

import express, { Request, Response } from 'express';
import path from 'path';


if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}


// -------------------firing express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'client/build')));


// -----------------config
import './config/dbConfig';


// -------------------routes
app.get('/', (request: Request, response: Response)=> response.sendFile(path.join(__dirname, 'client/build/home.html')));
app.get('/profile', (request: Request, response: Response)=> response.sendFile(path.join(__dirname, 'client/build/profile.html')));

app.get('*', (request: Request, response: Response)=>{
  console.log(request.url)
  response.json({ message: `The URL that you requested is NOT found!` })
});

// errors handler
app.use((error: any, request: Request, response: Response)=>{
  console.log(chalk.red(error.message));
  console.error(error.stack);

  return response.json({ error: true, message: error.message || `Something went wrong with the Server!` })
});



// --------------------Listen
const PORT = process.env.PORT || 5000;
app.listen(5000, ()=>{
  console.log(`Server running on PORT ${ PORT }`);
})