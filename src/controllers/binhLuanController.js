import { decodeToken } from "../config/jwt.js";
import {
  checkUser,
  checkAdmin,
  checkPhong,
  checkBinhLuan,
} from "../component/component.js";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/client/index.js";
import { NUMBER } from "sequelize";

let prisma = new PrismaClient();

const postComment = async (req, res) => {
  try {
    let { maPhong, noiDung, saoBinhLuan } = req.body;
    let { token } = req.headers;

    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkPhong = await checkPhong(maPhong);
    if (!chkPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maPhong`,
      });
      return;
    }

    let userInfo = decodeToken(token);
    let { id } = userInfo.data.checkEmail;

    let newData = {
      ma_phong: maPhong,
      ma_nguoi_binh_luan: id,
      noi_dung: noiDung,
      sao_binh_luan: Number(saoBinhLuan),
      ngay_binh_luan: new Date(),
    };

    await prisma.binhLuan.create({ data: newData });
    res.status(200).send({
      statusCode: 200,
      Message: `your comment has been uploaded`,
    });
  } catch (e) {
    res.status(400).send({
      statusCode: 400,
      Message: `An error as occurred, Err: ${e}`,
    });
  }
};
const getComment = async (req, res) => {
  try {
    let data = await prisma.BinhLuan.findMany();
    res.status(200).send({
      statusCode: 200,
      content: {
        comment: data,
      },
    });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};
const updateComment = async (req, res) => {
  try {
    let { id } = req.params;
    let { noiDung, saoBinhLuan } = req.body;

    let { token } = req.headers;

    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let userInfo = decodeToken(token);
    let user_id = userInfo.data.checkEmail.id;

    let getComment = await prisma.BinhLuan.findUnique({
      where: {
        id: Number(id),
      },
    });
    let chkAdmin = await checkAdmin(token);

    if (getComment.ma_nguoi_binh_luan === user_id || chkAdmin) {
      let intSaoBinhLuan =
        saoBinhLuan >= 0 ? Number(saoBinhLuan) : getComment.sao_binh_luan;

      let newData = {
        noi_dung: noiDung,
        sao_binh_luan: intSaoBinhLuan,
        ngay_binh_luan: new Date(),
      };

      await prisma.BinhLuan.update({
        data: newData,
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `your comment has been updated`,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the Owner or Admin to access this comment`,
      });
      return;
    }
  } catch (e) {
    res.status(400).send({
      statusCode: 400,
      Message: `An error as occurred, Err: ${e}`,
    });
  }
};
const deleteComment = async (req, res) => {
  try {
    let { id } = req.params;
    let { token } = req.headers;

    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkBinhLuan = await checkBinhLuan(id);
    if (!chkBinhLuan) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maBinhLuan`,
      });
      return;
    }

    let userInfo = decodeToken(token);
    let user_id = userInfo.data.checkEmail.id;

    let getComment = await prisma.BinhLuan.findUnique({
      where: {
        id: Number(id),
      },
    });

    let chkAdmin = await checkAdmin(token);

    if (getComment.ma_nguoi_binh_luan === user_id || chkAdmin) {
      await prisma.BinhLuan.delete({
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `comment has been deleted`,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the Owner or Admin to access this comment`,
      });
      return;
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};
const getCommentsByRoomId = async (req, res) => {
  try {
    let { id } = req.params;

    let chkPhong = await checkPhong(id);
    if (!chkPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maPhong`,
      });
      return;
    }

    let result = await prisma.binhLuan.findMany({
      where: { ma_phong: Number(id) },
    });

    res.status(200).send({ statusCode: 200, content: result });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

export {
  postComment,
  getComment,
  updateComment,
  deleteComment,
  getCommentsByRoomId,
};
