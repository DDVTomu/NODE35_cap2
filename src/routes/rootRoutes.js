// quản lý các đối tượng Router

import express from "express";
import authRoute from "./authRoutes.js";
import binhLuanRoute from "./binhLuanRoutes.js";
import viTriRoute from "./viTriRoutes.js";
import phongRoute from "./phongRoutes.js";
import userRoute from "./nguoiDungRoutes.js";
import datPhongRoute from "./datPhongRoutes.js";
const rootRoute = express.Router();

rootRoute.use("/auth", authRoute);
rootRoute.use("/binh-luan", binhLuanRoute);
rootRoute.use("/vi-tri", viTriRoute);
rootRoute.use("/phong-thue", phongRoute);
rootRoute.use("/users", userRoute);
rootRoute.use("/dat-phong", datPhongRoute);
// rootRoute.use("/product")

export default rootRoute;
