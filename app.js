const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use('/stylesURL', express.static(__dirname + '/client/stylesFOL'));
app.use('/scriptsURL', express.static(__dirname + '/client/scriptsFOL'));


/* ...............................
.     connecting to database
............................... */
mongoose.connect('mongodb+srv://AlvenLEAF:shenl0ng@blog-jxovm.mongodb.net/BlogDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, ()=>{
    console.log('Connected to MongoDB');
});




/* ...............................
.           middlewares
............................... */
//----------------body parser
app.use(bodyParser.json());

//--------------routes handling
app.use('/api', require('./routes/api-routes'));


//--------------errors handling
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send({alert: `There's an ERROR!!!`});
});




// ----------------LISTEN----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})