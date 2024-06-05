const connection = require("./db");

exports.getUserByUsername = async (email) => {
  const [user] = await connection.execute(
    "SELECT * FROM users WHERE name = ? LIMIT 1",
    [username]
  );
  return user;
};

exports.saveUser = async (email, username, password) => {
  const [result] = await connection.execute(
    "INSERT INTO users (email, username, password) VALUES (?,?,?)",
    [email, username, password]
  );
  return result;
};
