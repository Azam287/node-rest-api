const express = require('express');
//const { Mongoose } = require('mongoose');
const router = express.Router();

/*router.get('/',(req,res)=>{
    res.send('we are on home');
});*/

router.get('/posts',(res,req)=>{
    res.send('we are on posts tygyghuhoijoijoook');
});

router.get('/specific',(res,req)=>{
    res.send('we are on specific');
});

module.exports = router;