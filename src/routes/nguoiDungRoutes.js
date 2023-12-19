import express from "express";
import {
  getUser,
  postUser,
  getUserById,
  deleteUser,
  indexSearchNguoiDung,
  updateUser,
  searchNguoiDung,
  uploadNguoiDungImage,
} from "../controllers/nguoiDungController.js";

const userRoute = express.Router();
import { khoaApi } from "../config/jwt.js";
import { upload } from "../controllers/uploadController.js";
// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
userRoute.get("/", getUser);
userRoute.post("/", khoaApi, postUser);
userRoute.delete("/", khoaApi, deleteUser);
userRoute.get("/phan-trang-tim-kiem", indexSearchNguoiDung);
userRoute.get("/:id", getUserById);
userRoute.put("/:id", khoaApi, updateUser);
userRoute.get("/search/:tenNguoiDung", searchNguoiDung);
userRoute.post(
  "/upload-avatar",
  khoaApi,
  upload.single("file"),
  uploadNguoiDungImage
);
export default userRoute;
