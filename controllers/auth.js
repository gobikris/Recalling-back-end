const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const bcrypt = require("bcrypt");

// register User

const registerUser = async (req, res) => {
  try {
    const  {
      firstName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await  bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password,salt);

    const  newUser = new User({
      firstName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000)
    }) ;
    const saveUser = await newUser.save();
    console.log("New User is Sign Up:- ",saveUser);
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json({err: err.message});
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email: email});

    if(!user) return res.status(400).json({msg: "User doesn't exist"});
    
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword) return res.status(400).json({msg: "Please Enter correct password"});

    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET);

    // delete user.password;

    res.status(200).json({token,user,msg: "Authorized User"});

  } catch (err) {
    
    console.log(err);
    res.status(500).json({err: err.message});

  }
}

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({AllUserInfo : user});
}


module.exports =   {registerUser, loginUser, getAllUsers}