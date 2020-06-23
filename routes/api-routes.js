/* ...............................DB */
const Blog = require('../models/blog');

// -----------------------------------
const router = require('express').Router();




router.get('/', (req, res)=>{
    console.log(req.query.getName);

    Blog.findOne({name: req.query.getName})
        .then((foundItem)=>{
            console.log(foundItem);
            res.render('index', { data: foundItem});
        })

});






// router.get('/', (req, res)=>{
//     console.log(req.params.Name);
    
//     res.send(req.body);
//     // res.redirect('/');
// });

router.post('/', (req, res)=>{
    console.log(req.body)

    Blog.create(req.body)
        .then((createdItem)=>{
            res.send(createdItem);
        });
});

router.put('/', (req, res)=>{
    res.send(`This is a PUT request`);
});

router.delete('/', (req, res)=>{
    res.send(`This is a DELETE request`);
});


module.exports = router;