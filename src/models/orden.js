const mongoose = require('mongoose');

const ordenSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    piso: {
        type: String,
        required: true
    },
    forma: {
        type: String,
        required: true
    },
    efectivo: {
        type: Number,
        required: true
    },
    products: [{
        nombre: String,
        salsas: {
            bm: {
                type: Number,
                default: 0
            },
            sweetB: {
                type: Number,
                default: 0
            },
            jasons: {
                type: Number,
                default: 0
            }
        },
        cantidad: {
            type: Number
        }
    }],
    costoSalsas: {
        type: Number
    }
});

module.exports = mongoose.model('Ordenes', ordenSchema) //Nombre que le vamos a pasar y el esquema