import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  await userModel.create({
    first_name,
    last_name,
    email,
    password: hashPassword,
  });
  res.send("Register Don");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const loggedUser = await userModel.findOne({ email });
  if (!loggedUser) {
    return res.status(404).json({
      message: "Email or password is invalid",
    });
  }
  const correctPass = bcrypt.compareSync(password, loggedUser.password);
  if (!correctPass) {
    return res.status(404).json({
      message: "Email or password is invalid",
    });
  }
  if (loggedUser && correctPass) {
    const data = {
      id: loggedUser._id,
    };
    const token = jwt.sign(data, "shhhhh");
    res.status(201).json({
      message: "success",
      token,
    });
  }
};
