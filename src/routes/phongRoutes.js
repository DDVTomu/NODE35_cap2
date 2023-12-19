import express from "express";
import {
  postPhong,
  getPhong,
  getPhongById,
  updatePhong,
  deletePhong,
  indexSearchPhong,
  getPhongByViTri,
  uploadPhongImage
} from "../controllers/phongController.js";

const phongRoute = express.Router();
import { khoaApi } from "../config/jwt.js";
import { upload } from "../controllers/uploadController.js";
// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
phongRoute.get("/", getPhong);
phongRoute.post("/", khoaApi, postPhong);
phongRoute.get("/lay-phong-theo-vi-tri", getPhongByViTri);
phongRoute.get("/phan-trang-tim-kiem", indexSearchPhong);
phongRoute.get("/:id", getPhongById);
phongRoute.put("/:id", khoaApi, updatePhong);
phongRoute.delete("/:id", khoaApi, deletePhong);
phongRoute.post(
  "/upload-hinh-phong",
  khoaApi,
  upload.single("file"),
  uploadPhongImage
);
export default phongRoute;
