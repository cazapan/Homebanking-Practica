const { json } = require('express');
const  pool = require('../db/conexion')

const login = async (req, res) => {
    try {
        const { dni } = req.body;
        const respuesta = await pool.query('SELECT FROM personas WHERE dni = $1', [dni])
        if (respuesta.rows.length === 0) {
            return res.status(404).json({ error: 'Persona no encontrada'});
        }
        const persona = respuesta.rows[0]
        res.status(200).json({
            mensaje: 'Login exitoso',
            persona
        })
    } catch(error) {
        res.status(500).json({ error: 'Error interno del servidor'})
        console.log('Error interno:', error)
    }
}

module.exports = { login }