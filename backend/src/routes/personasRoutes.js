const express = require('express');
const router = express.Router();
const { getPersonas, getPersonasByID, postPersonas, updatePersonas, deletePersonas } = require('../controllers/personasController');

router.get('/', getPersonas);
router.get('/:id', getPersonasByID);
router.post('/', postPersonas);
router.put('/:id', updatePersonas);
router.delete('/:id', deletePersonas);

module.exports = router;