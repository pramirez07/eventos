const router = require('express').Router();

const { register, login, getProfile } = require('../../controllers/users.controller');
const { checkToken } = require('../../utils/middlewares');

router.get('/profile', checkToken, getProfile);
router.post('/register', register);
router.post('/login', login);

module.exports = router;