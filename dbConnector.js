// dbConnector.js
const mysql = require("mysql");

class DBConnector {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          console.log("Connected to the database");
          this.connection = connection;
          resolve(connection);
        }
      });
    });
  }

  async close() {
    this.connection.release();
    console.log("Connection to the database closed");
  }

  async query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = DBConnector;
