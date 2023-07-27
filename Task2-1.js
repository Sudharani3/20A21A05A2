
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb333"
});

function createDatabase(DatabaseName){
    const dbquery="CREATE DATABASE mydb2";
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    con.query(dbquery,function(err,res){
        if(err) throw err;
        console.log("My db created");
    })

})
}
function createTable(tableName) {
    
    var tbquery = "create table employees(id (Primary Key, Auto-increment),name (VARCHAR, 255 characters),department (VARCHAR, 100 characters),salary (DECIMAL, 10, 2))";
    con.query(tbquery,function(err,result){
        if(err) throw err;
        console.log("Table Created");
    })
}

