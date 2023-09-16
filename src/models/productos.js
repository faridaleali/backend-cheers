const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    stock: {
        type: Boolean,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    descripcion: {
        type: String,
    },
    cantidad: {
        type: Number,
        default: 1
    },
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
    costoSalsas: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Productos', productSchema) //Nombre que le vamos a pasar y el esquema