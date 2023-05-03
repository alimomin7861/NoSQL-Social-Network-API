const router = require('express').Router();
const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userID
router.route('/:userID').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/userId/friends').post(addFriend).delete(deleteFriend);

module.exports = router;
