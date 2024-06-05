const bcryptjs = require("bcryptjs");
const { getUserByUsername, saveUser } = require("./UserService");
const randomize = require("randomatic");
const jwt = require("jsonwebtoken");
// const NodeCache = require("node-cache");
// const myCache = new NodeCache();

//method for creating a user

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check if user exists in our database
    const userExist = await getUserByUsername(username);
    if (userExist.length > 0) {
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
    const user = await saveUser(username, hashed_password);
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
    return res.status(200).json({
      status: true,
      data: {},
      message: "Successful",
      token,
    });
  } catch (error) {
    console.error(error);
  }
};
