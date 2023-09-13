const router = require("express").Router();
const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')

router.use("/api/users", userRoutes);

router.use("/api/auth", authRoutes);


module.exports = router;