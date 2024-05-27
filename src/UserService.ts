import { Pool, RowDataPacket } from "mysql2/promise";

const connection: Pool = require("db");

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface Email {
  email: string;
}

// exports.getUserByEmail = async (email: string) => {
//   const [rows] = await connection.execute(
//     "SELECT * FROM users WHERE email = ? LIMIT 1",
//     [email]
//   );
exports.getUserByEmail = async (email: string): Promise<Email | null> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  const user = rows[0] as Email;

  return user;
};
// console.log('hello')
