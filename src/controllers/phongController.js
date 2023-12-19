import { decodeToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/client/index.js";
import {
  checkUser,
  checkAdmin,
  checkPhong,
  checkViTri,
} from "../component/component.js";
import { where } from "sequelize";

let model = initModels(sequelize);
let prisma = new PrismaClient();

const postPhong = async (req, res) => {
  let { token } = req.headers;
  let {
    tenPhong,
    khach,
    phongNgu,
    giuong,
    phongTam,
    moTa,
    giaTien,
    mayGiat,
    banLa,
    tivi,
    dieuHoa,
    wifi,
    bep,
    doXe,
    hoBoi,
    banUi,
    maViTri,
  } = req.body;

  try {
    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }
    let chkAdmin = await checkAdmin(token);
    if (chkAdmin) {
      let chkViTri = checkViTri(maViTri);
      if (!chkViTri) {
        res.status(400).send({
          statusCode: 400,
          Message: `Invalid/Not Exist MaViTri`,
        });
        return;
      }

      let newData = {
        ten_phong: tenPhong,
        khach: Number(khach),
        phong_ngu: Number(phongNgu),
        giuong: Number(giuong),
        phong_tam: Number(phongTam),
        mo_ta: moTa,
        gia_tien: Number(giaTien),
        may_giat: mayGiat,
        ban_la: banLa,
        tivi,
        dieu_hoa: dieuHoa,
        wifi,
        bep,
        do_xe: doXe,
        ho_boi: hoBoi,
        ban_ui: banUi,
        ma_vi_tri: Number(maViTri),
      };

      await prisma.Phong.create({ data: newData });

      res.status(200).send({
        statusCode: 200,
        Message: "Upload Phong successfull!",
        content: {
          phong: newData,
        },
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not Authorized to access this section`,
      });
      return;
    }
  } catch (e) {
    res.status(400).send({
      statusCode: 400,
      Message: `Upload unsuccessful, err:${e}`,
    });
  }
};

const getPhong = async (req, res) => {
  try {
    let data = await prisma.Phong.findMany({
      include: {
        ViTri: {
          select: {
            ten_vi_tri: true,
            tinh_thanh: true,
            quoc_gia: true,
            hinh_anh: true,
          },
        },
      },
    });
    res.status(200).send({ statusCode: 200, content: { phong: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const getPhongById = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.Phong.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        ViTri: {
          select: {
            ten_vi_tri: true,
            tinh_thanh: true,
            quoc_gia: true,
            hinh_anh: true,
          },
        },
      },
    });

    res.status(200).send({ statusCode: 200, content: { vitri: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occured: ${error}` });
  }
};

const getPhongByViTri = async (req, res) => {
  try {
    let { maViTri } = req.body;

    let chkViTri = checkViTri(maViTri);
    if (!chkViTri) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist MaViTri`,
      });
      return;
    }

    let data = await prisma.Phong.findMany({
      where: { ma_vi_tri: Number(maViTri) },
      include: {
        ViTri: {
          select: {
            ten_vi_tri: true,
            tinh_thanh: true,
            quoc_gia: true,
            hinh_anh: true,
          },
        },
      },
    });
    res.status(200).send({ statusCode: 200, content: { vitri: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `an error has occured:${error}` });
    return;
  }
};

const updatePhong = async (req, res) => {
  try {
    let { id } = req.params;
    let {
      tenPhong,
      khach,
      phongNgu,
      giuong,
      phongTam,
      moTa,
      giaTien,
      mayGiat,
      banLa,
      tivi,
      dieuHoa,
      wifi,
      bep,
      doXe,
      hoBoi,
      banUi,
      maViTri,
    } = req.body;

    let { token } = req.headers;

    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkPhong = await checkPhong(id);
    if (!chkPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Missing maPhong`,
      });
      return;
    }

    let chkViTri = checkViTri(maViTri);
    if (!chkViTri) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist MaViTri`,
      });
      return;
    }

    let getPhong = await prisma.Phong.findUnique({
      where: {
        id: Number(id),
      },
    });

    let chkAdmin = await checkAdmin(token);
    if (chkAdmin) {
      let valKhach = khach >= 0 ? Number(khach) : getPhong.khach;
      let valPhongNgu = phongNgu >= 0 ? Number(phongNgu) : getPhong.phong_ngu;
      let valGiuong = giuong >= 0 ? Number(giuong) : getPhong.giuong;
      let valPhongTam = phongTam >= 0 ? Number(phongTam) : getPhong.phong_tam;
      let valGiaTien = giaTien >= 0 ? Number(giaTien) : getPhong.gia_tien;

      let newData = maViTri
        ? {
            ten_phong: tenPhong,
            khach: valKhach,
            phong_ngu: valPhongNgu,
            giuong: valGiuong,
            phong_tam: valPhongTam,
            mo_ta: moTa,
            gia_tien: valGiaTien,
            may_giat: mayGiat,
            ban_la: banLa,
            tivi,
            dieu_hoa: dieuHoa,
            wifi,
            bep,
            do_xe: doXe,
            ho_boi: hoBoi,
            ban_ui: banUi,
            ma_vi_tri: Number(maViTri),
          }
        : {
            ten_phong: tenPhong,
            khach: valKhach,
            phong_ngu: valPhongNgu,
            giuong: valGiuong,
            phong_tam: valPhongTam,
            mo_ta: moTa,
            gia_tien: valGiaTien,
            may_giat: mayGiat,
            ban_la: banLa,
            tivi,
            dieu_hoa: dieuHoa,
            wifi,
            bep,
            do_xe: doXe,
            ho_boi: hoBoi,
            ban_ui: banUi,
          };

      await prisma.Phong.update({
        data: newData,
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `your Phong has been updated`,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the Admin to access this section`,
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

const deletePhong = async (req, res) => {
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

    let chkPhong = await checkPhong(id);
    if (!chkPhong) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maPhong`,
      });
      return;
    }

    let chkAdmin = await checkAdmin(token);

    if (chkAdmin) {
      await prisma.binhLuan.deleteMany({
        where: {
          ma_phong: Number(id),
        },
      });

      await prisma.datPhong.deleteMany({
        where: {
          ma_phong: Number(id),
        },
      });

      await prisma.Phong.delete({
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `Phong has been deleted`,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the Admin to access this comment`,
      });
      return;
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const indexSearchPhong = async (req, res) => {
  try {
    let { pageIndex, pageSize, keywords } = req.body;
    let index = pageIndex - 1;

    if (index < 0) {
      res
        .status(400)
        .send({ statusCode: 400, Message: "only accept index larger than 0" });
      return;
    }

    let data = await prisma.Phong.findMany({
      skip: index,
      take: pageSize,
      where: {
        ten_phong: {
          contains: keywords,
        },
      },
    });

    res.status(200).send({
      statusCode: 200,
      content: { pageIndex, pageSize, data },
    });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `an error has occured:${error}` });
    return;
  }
};

const uploadPhongImage = async (req, res) => {
  try {
    let file = req.file;

    let { id } = req.body;
    let { token } = req.headers;

    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkAdmin = await checkAdmin(token);

    if (chkAdmin) {
      if (!file) {
        res.send("Please choose an image to upload");
      } else {
        let filename = `/public/uploads/${file.filename}`;
        await prisma.Phong.update({
          data: {
            hinh_anh: filename,
          },
          where: {
            id: Number(id),
          },
        });

        res.status(200).send({
          statusCode: 200,
          Message: `Phong image has been updated`,
        });
      }
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not Authorized to access this section`,
      });
      return;
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};
export {
  postPhong,
  getPhong,
  getPhongById,
  updatePhong,
  deletePhong,
  indexSearchPhong,
  getPhongByViTri,
  uploadPhongImage,
};
