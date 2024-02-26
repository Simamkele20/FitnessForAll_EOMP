import express from "express"
import bodyParser from "body-parser";
import { users } from "../model/index.js";


const userRouter=express.Router()
//fetch users
userRouter.get('/',(req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve users'
        })
    }
})
//fetch user
userRouter.get('/:id',(req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a user'
        })
    }
})
//add a user
userRouter.post('/register',bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add new user'
        })
    }
})
userRouter.post('/login',bodyParser.json(),(req,res)=>{
    try{
        users.login(req,res)
    }
    catch{
        res.json({
            status:res.statusCode,
            msg:"Failed to log in"
        })
    }
})
userRouter.delete('/delete/:id',(req,res)=>{
    try{
        users.deleteUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete new user'
        })
    }


})
userRouter.patch('/update/:id',bodyParser.json(),(req,res)=>{
    try{
        users.updateUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to update user'
        })
    }

})



export{
    userRouter,express
}