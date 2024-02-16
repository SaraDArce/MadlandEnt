// const User = require("../models/Bookmark");

// async function index(req, res) {
//   try {
//     const users = await User.find({});
//     if (users) {
//       res.status(200).send(users);
//     }
//   } catch (e) {
//     res.status(400).send(e);
//   }
// }

// async function create(req, res) {
//   try {
//     const createdUser = await User.create(req.body);
//     if (createdUser) {
//       res.status(201).send(createdUser);
//     }
//   } catch (e) {
//     res.status(400).send(e);
//   }
// }

// async function destroy(req, res) {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (deletedUser) {
//       res.status(201).send(deletedUser);
//     }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// }

// async function update(req, res) {
//   try {
//     const userToUpdate = await User.findByIdAndUpdate(req.params.id);
//     if (userToUpdate) {
//       res.status(202).send(updatedUser);
//     }
//   } catch (e) {
//     res.status(400).send(e);
//   }
// }

// module.exports = {
//   index,
//   create,
//   destroy,
//   update,
// };
