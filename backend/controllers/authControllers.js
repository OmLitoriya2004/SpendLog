const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3h" });
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body || {};
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Emial already in use" });
    }
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });
    res
      .status(201)
      .json({
        id: user._id,
        user,
        token: generateToken(user._id),
        message: "User registered successfully",
      });
  } catch (e) {
    res.status(500).json({message:"Error registering user",error:e.message});
    console.log("Error in registerUser controller");
  }
};

exports.loginUser = async (req, res) => {
    const {email,password}=req.body || {};
    if(!email || !password){
        return res.status(401).json({message:"All fields are required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
          return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(201).json({
          id: user._id,
          user,
          token: generateToken(user._id),
          message: "User logged in successfully",
        });

    } catch (e) {
        res
          .status(500)
          .json({ message: "Error logging in user", error: e.message });
        console.log("Error in loginUser controller");
    }
};

exports.getUserInfo = async (req, res) => {
    try {
        const user=await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        res.status(200).json(user);
    } catch (e) {
        res
          .status(500)
          .json({ message: "Error in finding user", error: e.message });
        console.log("Error in getUserInfo controller");
    }
};
