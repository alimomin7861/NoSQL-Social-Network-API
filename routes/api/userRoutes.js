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

// /api/users/:userId
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendsId
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;
