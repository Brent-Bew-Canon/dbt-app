const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController.js');


// '/login'
// router.route('/login').post(login)

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/focus
router
    .route('/focus')
    .get(getOneUser)
    .delete(deleteUser);

module.exports = router;
