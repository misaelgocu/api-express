const { Router } = require('express');
cont authRouter = require('./auth');
const router = Router();

router.use('auth', authRouter);

module.exports = router;