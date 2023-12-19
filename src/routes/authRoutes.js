import express from "express";
import { authSignUp, authLogin } from "../controllers/authController.js";

const authRoute = express.Router();

// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
authRoute.post("/signup", authSignUp);

// login
// API chức năng đăng nhập
// localhost:8080/api/user/sign-up
authRoute.post("/signin", authLogin);

export default authRoute;
