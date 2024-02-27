import { dbconnection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import {createToken} from "../middleware/Aunthetication.js"
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT UserID,firstName,lastName,userAge,gender,emailAdd,userPass,userRole
        FROM Users
        `;

    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const qry = `
        SELECT UserID,firstName,lastName,
        userAge,gender,emailAdd,userPassuserRole
        FROM Users
        WHERE userID = ${req.params.id}
        `;

    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    //payload
    let data = req.body;
    data.userPass= await hash(data?.userPass, 8);
    let user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const qry = `
      INSERT INTO Users
      SET ?;
      `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "already exists.please use another email address",
        });
      } else {
        //create token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }


  async updateUser(req,res){
    const data=req.body
    if(data?.userPwd){
      data.userPwd=await hash(data?.userPwd,8)
    }
    const qry=`
  UPDATE Users 
  SET ?
  WHERE userID=${req.params.id};`
  db.query(qry, [data], (err) => {
      if (err) throw err 
        res.json({
          status: res.statusCode,
          msg: "user updated",
        
        })
      })

  }

  deleteUser(req,res){
    const qry=`
   DELETE FROM Users
   WHERE userID=${req.params.id}
`
   db.query(qry, (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg:"deleted"
    });
  });
  }

  login(req,res){
    const{emailAdd,userPwd}=req.body
    const qry=`
    SELECT UserID,firstName,lastName,userAge,gender,emailAdd,userPwd,userRole
          FROM Users
          WHERE emailAdd='${emailAdd}';
    `
    db.query(qry, async(err,result) => {
      if (err) throw err
      if(!result?.length){
        res.json({
          status: res.statusCode,
          msg:"wrong email provided"
        });
      }else{
       //validate pswd
       const validPass = await compare(userPwd, result[0].userPwd);
          if (validPass) {
            const token = createToken({
              emailAdd,
              userPwd,
            });
            res.json({
              status: res.statusCode,
              msg: "You're logged in.",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: " Please provide the correct password.",
            });
   
      }}})
      
  }
}


export{
    Users
}
