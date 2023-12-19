import express from "express";
import {
  postViTri,
  getViTri,
  indexSearchViTri,
  getViTriById,
  updateViTri,
  deleteViTri,
  uploadViTriImage,
} from "../controllers/viTriController.js";

const viTriRoute = express.Router();
import { khoaApi } from "../config/jwt.js";
import { upload } from "../controllers/uploadController.js";
// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
viTriRoute.post("/", khoaApi, postViTri);
viTriRoute.get("/", getViTri);
viTriRoute.get("/phan-trang-tim-kiem", indexSearchViTri);
viTriRoute.put("/:id", updateViTri);
viTriRoute.delete("/:id", deleteViTri);
viTriRoute.get("/:id", getViTriById);
viTriRoute.post(
  "/upload-hinh-vi-tri",
  khoaApi,
  upload.single("file"),
  uploadViTriImage
);
export default viTriRoute;
