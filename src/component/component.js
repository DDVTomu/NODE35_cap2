import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../config/jwt.js";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/client/index.js";

let prisma = new PrismaClient();
let model = initModels(sequelize);

const checkUser = async (token) => {
  try {
    let userInfo = decodeToken(token);
    let user_id = userInfo.data.checkEmail.id;
    let getUser = await prisma.nguoiDung.findUnique({
      where: {
        id: user_id,
      },
    });
    if (getUser) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const checkAdmin = async (token) => {
  try {
    let userInfo = decodeToken(token);
    let user_id = userInfo.data.checkEmail.id;

    let getUser = await prisma.nguoiDung.findUnique({
      where: {
        id: user_id,
      },
    });
    if (getUser.role === "ADMIN") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const checkPhong = async (maPhong) => {
  let getPhong = await prisma.Phong.findMany();
  let chkPhong = getPhong.filter((phong) => phong.id === Number(maPhong));
  if (chkPhong.length === 0) {
    return false;
  } else {
    return true;
  }
};

const checkBinhLuan = async (maBinhLuan) => {
  let getBinhLuan = await prisma.binhLuan.findMany();
  let chkBinhLuan = getBinhLuan.filter(
    (binhLuan) => binhLuan.id === Number(maBinhLuan)
  );
  if (chkBinhLuan.length === 0) {
    return false;
  } else {
    return true;
  }
};

const checkViTri = async (maViTri) => {
  let getViTri = await prisma.viTri.findMany();
  let chkViTri = getViTri.filter((viTri) => viTri.id === Number(maViTri));
  if (chkViTri.length === 0) {
    return false;
  } else {
    return true;
  }
};

const checkIdNguoiDung = async (maNguoiDung) => {
  let getNguoiDung = await prisma.NguoiDung.findMany();
  let chkNguoiDung = getNguoiDung.filter(
    (nguoiDung) => nguoiDung.id === Number(maNguoiDung)
  );
  if (chkNguoiDung.length === 0) {
    return false;
  } else {
    return true;
  }
};

const checkDateFormat = (dateString) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
};

const checkDatPhong = async (maDatPhong) => {
  let getDatPhong = await prisma.DatPhong.findMany();
  let chkDatPhong = getDatPhong.filter(
    (datPhong) => datPhong.id === Number(maDatPhong)
  );
  if (chkDatPhong.length === 0) {
    return false;
  } else {
    return true;
  }
};

export {
  checkUser,
  checkAdmin,
  checkPhong,
  checkBinhLuan,
  checkViTri,
  checkIdNguoiDung,
  checkDateFormat,
  checkDatPhong,
};
