const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root123",
    database: "employee_db"
});

db.connect(err => {
    if(err){
        console.log(err);
    }
    console.log("MySQL Connected");
});

app.get("/employees", (req,res)=>{
    db.query(
        "SELECT * FROM employees",
        (err,result)=>{
            if(err) throw err;
            res.json(result);
        }
    );
});

app.post("/employees",(req,res)=>{

    const {name,department,salary} = req.body;

    db.query(
        "INSERT INTO employees(name,department,salary) VALUES(?,?,?)",
        [name,department,salary],
        (err,result)=>{
            if(err) throw err;
            res.send("Employee Added");
        }
    );
});

app.listen(5000,()=>{
    console.log("Backend Running");
});