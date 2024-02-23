import { dbconnection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";

class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT UserID,firstName,lastName,userAge,gender,emailAdd,userPass,userRole,userProfile
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
        userAge,gender,emailAdd,userPass,userRole,userProfile
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
    data.userPwd = await hash(data?.userPwd, 8);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
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
}


export{
    Users
}
