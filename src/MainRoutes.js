// all authentication routes come here
const express = require("express");
const AuthController = require("./AuthController");
const validator = require("./ValidationMiddleware");
const { RegisterValidation, loginValidation } = require("./Vallidation");
const authRoutes = express.Router();

authRoutes.post(
  "/registerUser",
  validator.validateSchema(RegisterValidation),
  AuthController.registerUser
);

authRoutes.post(
  "/loginUser",
  validator.validateSchema(loginValidation),
  AuthController.loginUser
);

module.exports = authRoutes;
