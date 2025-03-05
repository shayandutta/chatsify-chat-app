import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body; //to get the data from the body of the request we need some middleware in server.js

    //password check
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    //already existing user check through userName
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic =
      `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic =
      `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const logout = (req, res) => {
  console.log("logoutUser");
};

export const login = (req, res) => {
  console.log("loginUser");
};
