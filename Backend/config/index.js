//index
import { createPool } from "mysql";
import { config } from "dotenv";
config()
let dbconnection=createPool({
    host : process.env.DB_HOST,
    database: process.env.DB_Name,
    user: process.env.DB_Username,
    password: process.env.DB_UserPass,
    multipleStatements:true,
    connectionLimit:30
})
export{
    dbconnection
}
