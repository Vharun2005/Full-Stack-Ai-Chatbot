const UserSchema = require("../module/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "vhaefvxhg";

const RegisterUser = async (req, res, next) => {
  const { username, password } = req.body;
  const getAlluser = await UserSchema.find({});
  if (getAlluser) {
    const getobj = getAlluser.find((item) => item.username === username);
    if (getobj) {
      return res.status(401).send("user aldready exists please Log in");
    }
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newObj = { username: username, password: hashedPassword };
  await UserSchema.create(newObj);
  return res.status(200).send("user created successfully");
  next();
};

const logIncheck = async (req, res, next) => {
  const { username, password } = req.body;
  const User = await UserSchema.findOne({ username: username });
  if (!User) {
    return res.status(404).send("user not Found Please Sign Up");
  }
  const validityPassword = await bcrypt.compare(password, User.password);
  if (!validityPassword) {
    return res.status(404).send("password is not matched");
  }
  const token = jwt.sign({ username: username }, secretKey);
  res.status(200).send(token);
  next();
};

const validUser = async (req, res, next) => {
  const getToken = req.headers.authorization;
  const validateUser = jwt.verify(getToken, secretKey);
  if (!validateUser) {
    return res.status(404).send("user not matched");
  }
  res.status(200).send(`${validateUser.username}`);
};

const PostQuestions = async (req, res, next) => {
  try {
    const { question, username } = req.body;
    const findUser = await UserSchema.findOne({ username: username });
    const oldArray = findUser.questions;
    findUser.questions = [...oldArray, question];
    findUser.save();
    res.send("posted successfully").status(200);
    next();
  } catch (err) {
    res.send(err);
  }
};
const GetQuestions = async (req, res, next) => {
  try {
    const username = req.body.username;
    console.log(username);
    // Find user by username
    const findUser = await UserSchema.findOne({ username: username });
    if (!findUser) {
      return res.status(404).send({ error: "User not found" });
    }
    // Send questions array as response
    const questionsArr = findUser.questions;
    return res.status(200).send(questionsArr);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

module.exports = {
  RegisterUser,
  validUser,
  logIncheck,
  PostQuestions,
  GetQuestions,
};
