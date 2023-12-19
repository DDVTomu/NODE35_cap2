import express from "express";
import {
  postComment,
  getComment,
  updateComment,
  deleteComment,
  getCommentsByRoomId,
} from "../controllers/binhLuanController.js";

const binhLuanRoute = express.Router();
import { khoaApi } from "../config/jwt.js";
// signUp
// API chức năng đăng ký
// localhost:8080/api/user/sign-up
binhLuanRoute.post("/", khoaApi, postComment);
binhLuanRoute.get("/", getComment);
binhLuanRoute.put("/:id", khoaApi, updateComment);
binhLuanRoute.delete("/:id", khoaApi, deleteComment);
binhLuanRoute.get("/lay-binh-luan-theo-phong/:id", getCommentsByRoomId);
export default binhLuanRoute;
