import users_model from "../models/users_model.js";

const add_user = async (req, res) => {

  const { name, email, mobile, username, password, address, profile_photo } = req.body;

  const userProfilePhoto = profile_photo || name.charAt(0).toUpperCase();

  const newUser = new users_model({
    name,
    email,
    mobile,
    username,
    password,
    address,
    profile_photo: userProfilePhoto,
  });

  try {
    await newUser.save();
    res.status(200).send('User added successfully');
  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Error adding user');
  }
};

const user_id = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await users_model.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: user._id });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } 
  catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, message: 'Error fetching user' });
  }
};
  
const user_login = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await users_model.findById(id);
    if (user) {
      res.json({ success: true, message: user });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } 
  catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ success: false, message: 'Error fetching user' });
  }
};



const user_list = async (req, res) => {
  try {
    const users = await users_model.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ success: false, message: 'No users found' });
    }
    res.json({ success: true, user: users });
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
};

const user_remove = async (req, res) => {
  try {
    const id = req.body.id;
    await users_model.findByIdAndDelete(id);
    res.json({ success: true, message: 'User removed successfully' });
  } 
  catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Failed to remove user' });
  }
};

const user_profile_update = async (req, res) => {
  const userId = req.params.id;
  const { name, email, mobile, username, password, address, profile_photo } = req.body;

  try {
    const user = await users_model.findById(userId);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.mobile = mobile || user.mobile;
      user.address = address || user.address;
      user.username = username || user.username;
      user.password = password || user.password;
      if (profile_photo === null || profile_photo === '') {
        user.profile_photo = null;
      } else {
        user.profile_photo = profile_photo || user.profile_photo;
      }
      await user.save();
      res.json({ success: true, message: 'Profile updated successfully' });
    } 
    else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } 
  catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ success: false, message: 'Error updating profile' });
  }
};
  
export { add_user, user_list, user_remove, user_login, user_id, user_profile_update };
