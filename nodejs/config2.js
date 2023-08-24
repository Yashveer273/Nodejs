const mysql = require("mysql");
const con = mysql.createConnection({
  server: 'database-6.coksslxbvsv4.us-east-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: '12345678',
  database: 'work',
});
con.connect((err) => {
  if (err) {
    // console.log("not connectd....");
  } else {
    console.log("connected..");
  }
});
module.exports=con;
