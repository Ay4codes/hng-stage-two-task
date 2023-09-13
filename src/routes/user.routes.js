const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.get('/', userCtrl.getAllUser)

router.get('/:query', userCtrl.getUser)

router.put('/:query', userCtrl.updateUser)

router.delete('/:query', userCtrl.deleteUser)

module.exports = router;