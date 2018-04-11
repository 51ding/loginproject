var mongoose=require("mongoose");
var config=require("../config");
var Schema=mongoose.Schema;
var glob=require("glob");
var {resolve}=require("path");

exports.initSchema=()=>{
	glob.sync(resolve(__dirname,"../Model","**/*.js")).forEach(require);
}

exports.init=function(){
	
  let connectTime=0;
  
	return new Promise((resolve,reject)=>{
			
			mongoose.set("debug",config.NODE_ENV === "development");
			
			mongoose.connect(config.connectString);
			
		
			
			var db=mongoose.connection;
			
			db.on("open",()=>{
				console.log("链接成功！");
				resolve();
			})
			
			db.on("disconnected",()=>{
				
			})
			
			db.on("error",(error)=>{
				reject(error);
				 connectTime++;
					if( connectTime < config.MAX_CONNECT_COUNT ){
						 mongoose.connect(config.connectString);
					}
					else{
						throw new Error("数据库挂了！");
						process.exit(1);
					}
			})
			
			
			
			
			
	})
}
