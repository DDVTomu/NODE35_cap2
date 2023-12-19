import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../config/jwt.js";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

let model = initModels(sequelize);

const authSignUp = async (req, res) => {
  let { name, email, pass_word, phone, birth_day, gender, role } = req.body;

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
  // yarn add bcrypt => salt
  let passCrypt = bcrypt.hashSync(pass_word, 10);

  let newData = {
    name,
    email,
    pass_word: passCrypt, // mã hóa pass word
    phone,
    birth_day,
    gender,
    role: "USER",
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
};

const authLogin = async (req, res) => {
  try {
    let { email, pass_word } = req.body;

    let checkEmail = await model.NguoiDung.findOne({
      where: {
        email: email,
      },
    });

    if (checkEmail) {
      let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word); // true, false
      console.log(checkPass);
      if (checkPass) {
        let user = await model.NguoiDung.findOne({
          where: {
            email: email,
          },
        });
        let token = createToken({ checkEmail, pass_word: "" }); // mã hóa 2 chiều
        res.status(200).send({
          statusCode: 200,
          content: {
            user: user,
            token: token,
          },
        });
      } else {
        res
          .status(400)
          .send({ statusCode: 400, Message: "Missing or Incorrect password!" });
      }
    } else {
      res
        .status(400)
        .send({ statusCode: 400, Message: "Missing or Incorrect Email!" });
    }
  } catch (error) {
    res
      .status(400)
      .send({ statusCode: 400, Message: `An error has occurred: ${error}` });
  }
};

export { authSignUp, authLogin };
