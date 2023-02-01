var express = require('express');
const apis = require('./api');
var router = express.Router();
const dotenv = require('dotenv')
dotenv.config()
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.DEV_PORT)
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello World ');
});

router.get('/get-data', async (req, res)=>{
  let data =  await apis.getData()
      console.log(data)  
    
    res.send('ok')  
})

module.exports = router;
