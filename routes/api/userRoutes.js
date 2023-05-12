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
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendID
router.route('/:id/friends').post(addFriend).delete(deleteFriend);

module.exports = router;
