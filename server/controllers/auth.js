import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const {
      firstName,lastName,email,password, picturePath,friends,location,occupation,
    } = req.body;

    const newUser = new User({
      firstName,lastName,email,password, picturePath,friends,location,occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) return res.status(400).json({ msg: "User does not exist." });

    if (password !== user.password) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({ user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


