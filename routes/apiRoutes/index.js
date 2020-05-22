const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
// const eventRoutes = require('./eventRoutes');
// const recordRoutes = require('./recordRoutes');
// const exerciseLogRoutes = require('./exerciseLogRoutes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/team', teamRoutes);
// router.use('/event', eventRoutes);
// router.use('/record', recordRoutes);
// router.use('/exerciselog', exerciseLogRoutes);

module.exports = router;
