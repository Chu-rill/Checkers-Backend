const bcryptjs = require("bcryptjs");
const { getUserByEmail, saveUser } = require("../services/UserService");
const randomize = require("randomatic");
const jwt = require("jsonwebtoken");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

//method for creating a user

exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // check if user exists in our database
    const emailExist = await getUserByEmail(email);
    if (emailExist.length > 0) {
      // if user exists, return an error
      return res.status(400).json({
        status: false,
        data: {},
        message: "User already exists",
      });
    }
    //if user does not exist, we hash the password
    const hashed_password = await bcryptjs.hash(password, 10);
    //store user details to database.
    const user = await saveUser(email, username, hashed_password);
    if (!user) {
      return res.status(400).json({
        status: false,
        data: {},
        message: "Something went wrong",
      });
    }

    // const payload = {
    //   email,
    //   id: user.id,
    // };

    //send email to user
  } catch (error) {
    console.error(error);
  }
};
