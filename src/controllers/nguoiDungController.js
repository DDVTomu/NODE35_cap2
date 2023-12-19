import initModels from "../models/init-models.js";
import {
  checkUser,
  checkAdmin,
  checkIdNguoiDung,
} from "../component/component.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../config/jwt.js";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

let model = initModels(sequelize);

const postUser = async (req, res) => {
  let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
  let { token } = req.headers;
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
      // check email
      let checkEmail = await model.NguoiDung.findOne({
        where: {
          email: email,
        },
      });

      if (checkEmail) {
        res.status(400).send({
          statusCode: 400,
          Message: "Email already exists!",
        });
        return;
      }

      let checkRole = role === "USER" || role === "ADMIN" ? true : false;

      if (!checkRole) {
        res.status(400).send({
          statusCode: 400,
          Message: "Only Accepts 'USER' or 'ADMIN' role ",
        });
        return;
      }
      // yarn add bcrypt => salt
      let passCrypt = bcrypt.hashSync(pass_word, 10);

      let newData = {
        name,
        email,
        pass_word: passCrypt, // mã hóa pass word
        phone,
        birth_day,
        gender,
        role,
      };

      // await model.users.create(newData); // INSERT INTO VALUES
      await prisma.NguoiDung.create({ data: newData });

      res.status(200).send({
        statusCode: 200,
        Message: "Sign up successfull!",
        content: {
          user: newData,
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
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const getUser = async (req, res) => {
  try {
    let data = await prisma.nguoiDung.findMany();
    res.status(200).send({ statusCode: 200, content: { users: data } });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
  let { token } = req.headers;
  try {
    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkIdNguoiDung = await checkIdNguoiDung(id);
    if (!chkIdNguoiDung) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maNguoiDung`,
      });
      return;
    }

    let userInfo = decodeToken(token);
    let user_id = userInfo.data.checkEmail.id;

    let getNguoiDung = await prisma.NguoiDung.findUnique({
      where: {
        id: Number(id),
      },
    });

    let chkAdmin = await checkAdmin(token);
    if (getNguoiDung.id === user_id || chkAdmin) {
      // check email

      if (email) {
        let checkEmail = await prisma.NguoiDung.findMany({
          where: {
            email: email,
            NOT: {
              id: Number(id),
            },
          },
        });

        console.log(checkEmail);
        if (checkEmail.length > 0) {
          res.status(400).send({
            statusCode: 400,
            Message: "This Email already exists!",
          });
          return;
        }
      }

      if (role) {
        let checkRole = role === "USER" || role === "ADMIN" ? true : false;
        if (!checkRole) {
          res.status(400).send({
            statusCode: 400,
            Message: "Only Accepts 'USER' or 'ADMIN' role ",
          });
          return;
        }
      }

      let passCrypt;
      // yarn add bcrypt => salt
      if (pass_word) {
        passCrypt = bcrypt.hashSync(pass_word, 10);
      }

      let newData = {
        ...getNguoiDung,
        name,
        email,
        pass_word: passCrypt, // mã hóa pass word
        phone,
        birth_day,
        gender,
        role,
      };

      await prisma.NguoiDung.update({
        data: newData,
        where: { id: Number(id) },
      });

      res.status(200).send({
        statusCode: 200,
        Message: "Update successfull!",
        content: {
          user: newData,
        },
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the User or Authorized to access this section`,
      });
      return;
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const deleteUser = async (req, res) => {
  let { id } = req.body;
  let { token } = req.headers;
  try {
    let chkUser = await checkUser(token);
    if (!chkUser) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid User Token`,
      });
      return;
    }

    let chkIdNguoiDung = await checkIdNguoiDung(id);
    if (!chkIdNguoiDung) {
      res.status(400).send({
        statusCode: 400,
        Message: `Invalid/Not Exist maNguoiDung`,
      });
      return;
    }

    let chkAdmin = await checkAdmin(token);

    if (chkAdmin) {
      await prisma.binhLuan.deleteMany({
        where: {
          ma_nguoi_binh_luan: Number(id),
        },
      });

      await prisma.datPhong.deleteMany({
        where: {
          ma_nguoi_dat: Number(id),
        },
      });

      await prisma.NguoiDung.delete({
        where: { id: Number(id) },
      });
      res.status(200).send({
        statusCode: 200,
        Message: `Nguoi Dung has been deleted`,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        Message: `You're not the Authorized to access this section`,
      });
      return;
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};

const getUserById = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await prisma.NguoiDung.findUnique({
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

const indexSearchNguoiDung = async (req, res) => {
  try {
    let { pageIndex, pageSize, keywords } = req.body;
    let index = pageIndex - 1;

    if (index < 0) {
      res
        .status(400)
        .send({ statusCode: 400, Message: "only accept index larger than 0" });
      return;
    }

    let data = await prisma.NguoiDung.findMany({
      skip: index,
      take: pageSize,
      where: {
        OR: [
          {
            name: {
              contains: keywords,
            },
          },
          {
            email: {
              contains: keywords,
            },
          },
        ],
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

const searchNguoiDung = async (req, res) => {
  try {
    let { tenNguoiDung } = req.params;

    let data = await prisma.NguoiDung.findMany({
      where: {
        OR: [
          {
            name: {
              contains: tenNguoiDung,
            },
          },
        ],
      },
    });

    res.status(200).send({
      statusCode: 200,
      content: { data },
    });
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `an error has occured:${error}` });
    return;
  }
};

const uploadNguoiDungImage = async (req, res) => {
  try {
    let file = req.file;
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

    if (!file) {
      res.send("Please choose an image to upload");
    } else {
      let filename = `/public/uploads/${file.filename}`;
      await prisma.NguoiDung.update({
        data: {
          avatar: filename,
        },
        where: {
          id: Number(user_id),
        },
      });

      res.status(200).send({
        statusCode: 200,
        Message: `Vitri image has been updated`,
      });
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred:${error}` });
  }
};
export {
  getUser,
  postUser,
  getUserById,
  deleteUser,
  indexSearchNguoiDung,
  updateUser,
  searchNguoiDung,
  uploadNguoiDungImage,
};
