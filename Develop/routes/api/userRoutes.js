const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend,

} = require('../../controllers/userController');

// GET and POST Routes for all users
router.route('/').get(getUsers).post(createUser);

// GET, PUT and DELETE Routes defined by ID
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// POST & DELETE Routes for friends 
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// Export the router
module.exports = router;