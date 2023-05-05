const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtByID,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtID
router.route('/:thoughtID').get(getThoughtByID).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
router.route('/userId/friends').post(createReaction)

// /api/thoughts/:thoughtID/reactions/:reactionID
router.route('/:thoughtID/reactions/:reactionID').delete(deleteReaction);

module.exports = router;