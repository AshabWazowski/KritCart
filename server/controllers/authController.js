import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTRATION LOGIC
export const register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  console.log(email, firstName, lastName, password);

  try {
    const existingUser = await User.findOne({ email }); //Finding Exisitng user in the database
    if (existingUser) {
      return res.status(409).json({ message: "User already exist" }); //Conflict
    }

    const hashPassword = await hash(password, 10); //Hashing passward using bcrypt

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    newUser.save(); //user saved in the database successfully
    res
      .status(200)
      .json({ message: "User Registered successfully", user: newUser });
  } catch (err) {
    console.log("Error Message :", err.message);
  }
  console.log("Clicked");
};

// LOGIN LOGIC
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); //Check for existing user
    if (!user) {
      return res.json({ message: "User does not exist." });
    }
    // If user exists then check for the password match using the bcrypt
    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      return res.json({ message: "Invalid Password" }); //If password is incorrect
    }
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY); //Generate a JWT Token
    return res.status(200).json({ token: token, userData: user }); //return user info
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};
