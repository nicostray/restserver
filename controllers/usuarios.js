const {response} = require('express');

const usuariosGet = (req, res) => {
    const {q, nombre = "noname",apikey} = req.query;
    res.json({
        Mensaje: 'Petición get desde el controlador',
        q,
        nombre, 
        apikey
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.json({
        Mensaje: 'Petición post desde el controlador',
        body
    })
    console.log(`El nombre es ${body.nombre}`)
}

const usuariosPut = (req, res) => {
    const {id} = req.params;
    res.json({
        Mensaje: 'Petición put desde el controlador',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        Mensaje: 'Petición delete desde el controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}