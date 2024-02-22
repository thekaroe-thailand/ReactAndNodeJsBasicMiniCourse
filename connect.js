const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "tavonseesenpila",
  password: "1234",
  port: 5432,
  database: "db_react_node_minicourse",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
