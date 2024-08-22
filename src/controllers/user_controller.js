import { User } from "../Schema/user.schema.js";


export async function createUser(req, res) {
  const { username, email, password } = req.body;
  try {
    await User.create({ username: username, email: email, password: password });
    res.status(201).send({ message: "User created successfully"});
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.send({users});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}


export async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate('shorted_urls');
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}


export async function updateUser(req, res) {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
