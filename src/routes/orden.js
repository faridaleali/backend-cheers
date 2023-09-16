const express = require("express");
const router = express.Router();
const ordenSchema = require("../models/orden")

// Crear nueva orden
router.post("/ordenes", (req, res) => {
    const product = ordenSchema(req.body)

	product
		.save()
		.then( (data) => res.json(data) )
		.catch( (error) => res.json({
				message: error
		}));
});

// Obtener todas las ordenes
router.get("/ordenes", (req, res) => {
    ordenSchema
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({
            message: error
        }));
});

// Obtener 1 orden
router.get("/ordenes/:id", (req, res) => {
    const { id } = req.params;

    ordenSchema
        .find(id)
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({
            message: error
        }));
});

// Editar 1 producto
router.put("/ordenes/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    ordenSchema
			.updateOne({ _id: id}, { $set: { nombre } })
			.then( (data) => res.json(data) )
			.catch( (error) => res.json({
					message: error
			}));
});

// Eliminar 1 producto
router.delete("/ordenes/:id", (req, res) => {
    const { id } = req.params;

    ordenSchema
        .remove({ _id: id})
        .then( (data) => res.json(data) )
        .catch( (error) => res.json({
            message: error
        }));
});

module.exports = router;