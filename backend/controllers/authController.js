const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../utils/tokenHelper');

exports.register = async (req, res) => {
  const { name, email, password, mobileNumber } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, mobileNumber });
    const savedUser = await newUser.save();
    const token = generateToken(savedUser);

    res.status(201).json({ token, user: { name: savedUser.name, email: savedUser.email } });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.status(200).json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};
