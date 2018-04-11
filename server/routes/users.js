var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
/* GET users listing. */
router.get('/', function(req, res, next) {
var User=mongoose.model("User");
var user=new User({
	loginname:"zhangsan",
	password:"king121456",
	email:"houhanbin121456@163.com",
	phone:"18801410502"
})

user.save((error,doc)=>{
	if(error) return res.send("服务器错误！");
	res.json(doc);
})
});

module.exports = router;
