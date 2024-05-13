const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThoughtById,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET & POST Routes for thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, PUT and DELETE Routes for thoughts defined by ID
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);

// POST reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE reaction to a thought 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export the router
module.exports = router;