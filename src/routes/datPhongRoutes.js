import express from "express";
import {
  getDatPhong,
  postDatPhong,
  getDatPhongById,
  updateDatPhong,
  deleteDatPhong,
  getDatPhongByUserId,
} from "../controllers/datPhongController.js";

const datPhongRoute = express.Router();
import { khoaApi } from "../config/jwt.js";
import { upload } from "../controllers/uploadController.js";
// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
datPhongRoute.post("/", postDatPhong);
datPhongRoute.get("/", getDatPhong);
datPhongRoute.get("/:id", getDatPhongById);
datPhongRoute.put("/:id", updateDatPhong);
datPhongRoute.delete("/:id", deleteDatPhong);
datPhongRoute.get("/lay-theo-nguoi-dung/:maNguoiDung", getDatPhongByUserId);
export default datPhongRoute;
