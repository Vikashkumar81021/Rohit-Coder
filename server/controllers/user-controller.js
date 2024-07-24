import User from "../models/user-model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const { userName, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already Exists",
        sucess: false,
      });
    }
    const userCreate = await User.create({
      userName,
      email,
      password,
      phone,
    });
    await userCreate.save();

    return res.status(201).json({
      message: "User created Successfully",
      sucess: true,
      token: await userCreate.generateToken(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).json({ message: "Invalid credentails" });
    }
    const isPasswordMatch = await bcrypt.compare(password, userExists.password);
    if (isPasswordMatch) {
      res.status(200).json({
        messgae: " login successful",
        token: await userExists.generateToken(),
      });
    } else {
      res.status(404).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
