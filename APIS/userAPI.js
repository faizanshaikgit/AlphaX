require('dotenv').config()
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const exp=require('express')
const jwt=require('jsonwebtoken')
const userApp=exp.Router()

//To extract body of request object.
userApp.use(exp.json())
//create a route to 'getusers/id' path

userApp.post('/login',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    userObj=request.body
    let tempUser=await userCollectionObj.findOne({username:userObj.username})
    console.log(tempUser)
    if(tempUser===null){
        response.send({message:"Invalid users"})
    }
    else{
        const status=await bcrypt.compare(userObj.password,tempUser.password)
        if(status==false){
            response.send({message:"Invalid password"})
        }
        else{
            let token=jwt.sign({username:userObj.username},''+process.env.SECURITY,{expiresIn:60})
            response.send({message:"Login success",payload:token,userdata:tempUser})
        }
    }
}))

//create a route to create-user path

userApp.post('/create-user',asyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj");
    let newUser=request.body;
    let tempUser=await userCollectionObj.findOne({username:newUser.username})
    if(tempUser!==null){
        response.send({message:"The username already exist..please choose another.."})
    }
    else{
        let hashedPassword= await bcrypt.hash(newUser.password,5)
        newUser.password=hashedPassword;
        await userCollectionObj.insertOne(newUser)
        response.send({message:"User Created successfully..."})
    }
}))

module.exports=userApp