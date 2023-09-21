const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    login
} = require('../../controllers/userController.js');


// '/api/user/login'
router.route('/login').post(login)

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/focus
router
    .route('/focus')
    .get(getOneUser)
    .delete(deleteUser);

module.exports = router;
