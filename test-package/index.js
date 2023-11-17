// app.js
const DBConnector = require("../dbConnector");

// MySQL database connection details
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "node-mysql-connector",
};

const dbConnector = new DBConnector(dbConfig);

async function run() {
  await dbConnector.connect();

  // SQL Query
  try {
    const results = await dbConnector.query("SELECT * FROM users");
    console.log("Query results:", results);
  } catch (error) {
    console.error("Error executing query:", error);
  }

  await dbConnector.close();
}

run();
