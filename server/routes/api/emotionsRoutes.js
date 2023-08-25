const router = require('express').Router();

const {
    getEmotions,
    getEmotionsById,
    createEmotions,
    deleteEmotions,
    updateEmotions,
} = require('../../controllers/emotionsController.js');

// /api/emotions
router.route('/').get(getEmotions).post(createEmotions);

// /api/emotions/focus
router
    .route('/focus')
    .put(updateEmotions)
    .delete(deleteEmotions);

//  /api/emotions/:emotionsId
router.route('/:emotionsId').get(getEmotionsById)

module.exports = router;