var mongoose=require("mongoose");

var Schema=mongoose.Schema;

var userSchema=new Schema({
	loginname:String,
	password:String,
	email:String,
	phone:String
})

mongoose.model("User",userSchema,"Base_User");

