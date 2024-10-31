const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    nombre: String,
    descripcion: String,
    fecha: Date,
    ubicacion: String,
    tipoDeporte: String,
    organizador: String
}, {
    timestamps: true, versionKey: false
});

const Event = model('event', eventSchema);
module.exports = Event;