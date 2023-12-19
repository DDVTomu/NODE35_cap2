import initModels from "../models/init-models.js";
import { checkDatPhong } from "../component/component.js";
import sequelize from "../models/connect.js";
import {
  checkIdNguoiDung,
  checkPhong,
  checkDateFormat,
} from "../component/component.js";
import { createToken, decodeToken } from "../config/jwt.js";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/client/index.js";

let prisma = new PrismaClient();
let model = initModels(sequelize);

const postDatPhong = async (req, res) => {
  let { maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDat } = req.body;
  try {
    let chkPhong = await checkPhong(maPhong);
    if (!chkPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Missing maPhong`,
      });
      return;
    }

    let chkIdNguoiDung = await checkIdNguoiDung(maNguoiDat);
    if (!chkIdNguoiDung) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Missing maNguoiDung`,
      });
      return;
    }

    if (ngayDen) {
      let chkNgayDen = checkDateFormat(ngayDen);
      if (!chkNgayDen) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid NgayDen, correct format is: YYYY-MM-DD`,
        });
        return;
      }
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `please input NgayDen`,
      });
      return;
    }

    if (ngayDi) {
      let chkNgayDi = checkDateFormat(ngayDi);
      if (!chkNgayDi) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid NgayDi, correct format is: YYYY-MM-DD`,
        });
        return;
      }
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `please input NgayDi`,
      });
      return;
    }
    let newData = {
      ma_phong: Number(maPhong),
      ngay_den: new Date(ngayDen),
      ngay_di: new Date(ngayDi),
      so_luong_khach: Number(soLuongKhach),
      ma_nguoi_dat: Number(maNguoiDat),
    };

    // await model.users.create(newData); // INSERT INTO VALUES
    await prisma.datPhong.create({ data: newData });

    res.status(200).send({
      statusCode: 200,
      Message: "DatPhong added successful!",
      content: {
        location: newData,
      },
    });
  } catch (error) {
    res.status(400).send({
      statusCode: 400,
      Message: `An error has occured: ${error}`,
    });
  }
};

const getDatPhong = async (req, res) => {
  try {
    let data = await prisma.datPhong.findMany();

    res.status(200).send({ statusCode: 200, content: { vitri: data } });
  } catch (error) {
    res.status(400).send({
      statusCode: 400,
      Message: `An error has occured: ${error}`,
    });
  }
};

const getDatPhongById = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.datPhong.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).send({ statusCode: 200, content: { vitri: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occured: ${error}` });
  }
};

const updateDatPhong = async (req, res) => {
  let { maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDat } = req.body;
  try {
    let { id } = req.params;

    let chkDatPhong = checkDatPhong(id);
    if (!chkDatPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Missing maPhong`,
      });
      return;
    }

    let getDatPhong = await prisma.datPhong.findUnique({
      where: {
        id: Number(id),
      },
    });

    let valMaPhong = getDatPhong.ma_phong;
    let valNgayDen = getDatPhong.ngay_den;
    let valNgayDi = getDatPhong.ngay_di;
    let valSoKhach = soLuongKhach
      ? Number(soLuongKhach)
      : getDatPhong.so_luong_khach;
    let valMaNguoiDat = getDatPhong.ma_nguoi_dat;
    if (maPhong) {
      let chkPhong = await checkPhong(maPhong);
      if (!chkPhong) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid/Missing maPhong`,
        });
        return;
      }

      valMaPhong = Number(maPhong);
    }

    if (ngayDen) {
      let chkNgayDen = checkDateFormat(ngayDen);
      if (!chkNgayDen) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid NgayDen, correct format is: YYYY-MM-DD`,
        });
        return;
      }
      valNgayDen = new Date(ngayDen);
    }

    if (ngayDi) {
      let chkNgayDi = checkDateFormat(ngayDi);
      if (!chkNgayDi) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid NgayDi, correct format is: YYYY-MM-DD`,
        });
        return;
      }
      valNgayDi = new Date(ngayDi);
    }

    if (maNguoiDat) {
      let chkIdNguoiDung = await checkIdNguoiDung(maNguoiDat);
      if (!chkIdNguoiDung) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid/Missing maNguoiDung`,
        });
        return;
      }

      valMaNguoiDat = Number(maNguoiDat);
    }

    let newData = {
      ma_phong: valMaPhong,
      ngay_den: valNgayDen,
      ngay_di: valNgayDi,
      so_luong_khach: valSoKhach,
      ma_nguoi_dat: valMaNguoiDat,
    };

    await prisma.datPhong.update({ data: newData, where: { id: Number(id) } });

    res.status(200).send({ statusCode: 200, content: { datPhong: newData } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occured: ${error}` });
  }
};

const deleteDatPhong = async (req, res) => {
  try {
    let { id } = req.params;

    let chkDatPhong = checkDatPhong(id);
    if (!chkDatPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Missing maPhong`,
      });
      return;
    }

    await prisma.datPhong.delete({
      where: { id: Number(id) },
    });

    res.status(200).send({
      statusCode: 200,
      Message: `DatPhong has been deleted`,
    });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const getDatPhongByUserId = async (req, res) => {
  try {
    let { maNguoiDung } = req.params;
    let data = await prisma.datPhong.findMany({
      where: {
        ma_nguoi_dat: Number(maNguoiDung),
      },
    });

    res.status(200).send({ statusCode: 200, content: { vitri: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occured: ${error}` });
  }
};

export {
  postDatPhong,
  getDatPhong,
  getDatPhongById,
  updateDatPhong,
  deleteDatPhong,
  getDatPhongByUserId,
};
