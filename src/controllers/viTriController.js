import initModels from "../models/init-models.js";
import { checkUser, checkAdmin } from "../component/component.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../config/jwt.js";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/client/index.js";
let prisma = new PrismaClient();

let model = initModels(sequelize);

const postViTri = async (req, res) => {
  try {
    let { token } = req.headers;
    let { tenViTri, tinhThanh, quocGia } = req.body;

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
      let checkViTri = await model.ViTri.findOne({
        where: {
          ten_vi_tri: tenViTri,
          tinh_thanh: tinhThanh,
          quoc_gia: quocGia,
        },
      });

      if (checkViTri) {
        res.status(400).send({
          statusCode: 400,
          Message: "ViTri is already existed!",
        });
        return;
      }

      let newData = {
        ten_vi_tri: tenViTri,
        tinh_thanh: tinhThanh,
        quoc_gia: quocGia,
      };

      // await model.users.create(newData); // INSERT INTO VALUES
      await prisma.ViTri.create({ data: newData });

      res.status(200).send({
        statusCode: 200,
        Message: "Location added successful!",
        content: {
          location: newData,
        },
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not Authorized to access this section`,
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      statusCode: 400,
      Message: `An error has occured: ${error}`,
    });
  }
};

const getViTri = async (req, res) => {
  let data = await prisma.ViTri.findMany();

  res.status(200).send({ statusCode: 200, content: { vitri: data } });
};
const updateViTri = async (req, res) => {
  try {
    let { id } = req.params;
    let { tenViTri, tinhThanh, quocGia } = req.body;

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
      let newData = {
        ten_vi_tri: tenViTri,
        tinh_thanh: tinhThanh,
        quoc_gia: quocGia,
      };

      await prisma.ViTri.update({
        data: newData,
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `Vi tri has been updated`,
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
      Message: `An error as occurred, Err: ${e}`,
    });
  }
};

const indexSearchViTri = async (req, res) => {
  try {
    let { pageIndex, pageSize, keywords } = req.body;
    let index = pageIndex - 1;

    if (index < 0) {
      res
        .status(400)
        .send({ statusCode: 400, Message: "only accept index larger than 0" });
      return;
    }

    let data = await prisma.ViTri.findMany({
      skip: index,
      take: pageSize,
      where: {
        OR: [
          {
            ten_vi_tri: {
              contains: keywords,
            },
          },
          {
            tinh_thanh: {
              contains: keywords,
            },
          },
        ],
      },
    });

    // const caseSensitiveResults = data.filter((vitri) =>
    //   vitri.ten_vi_tri.includes(keywords)
    // );

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

const getViTriById = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.ViTri.findUnique({
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

const deleteViTri = async (req, res) => {
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

    let chkAdmin = await checkAdmin(token);

    if (chkAdmin) {
      await prisma.ViTri.delete({
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `Vitri has been deleted`,
      });
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

const uploadViTriImage = async (req, res) => {
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
        await prisma.ViTri.update({
          data: {
            hinh_anh: filename,
          },
          where: {
            id: Number(id),
          },
        });

        res.status(200).send({
          statusCode: 200,
          Message: `Vitri image has been updated`,
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
  postViTri,
  getViTri,
  indexSearchViTri,
  getViTriById,
  updateViTri,
  deleteViTri,
  uploadViTriImage,
};
