const express = require('express');
const nutrationController = require('../Controller/NutrationController');
//const userController = require('../Controller/UserController')

const router = express.Router();

//router.use(userController.authorize);

router.get('', nutrationController.getAll);
router.post('/create', nutrationController.create);
router.get('/:id', nutrationController.getNutrationById);
router.put('/:id', nutrationController.updateNutrationById);
router.delete('/:id', nutrationController.deleteNutrationById);

module.exports = router;