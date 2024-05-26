const connection: any = require("db");

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  // Add any other fields present in the users table
}

exports.getUserByEmail = async (email: string) => {
  const [rows] = await connection.execute(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  const user = rows[0] as User | undefined;

  return user;
};
// console.log("hello")