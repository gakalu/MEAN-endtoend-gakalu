const NutrationCollection = require('../model/Nutration')
exports.getAll = async (req, res) => {
    const nutrations = await NutrationCollection.getAll();
    res.send(nutrations);
}

exports.create = async (req, res) => {
    const nutration = await NutrationCollection.create(req.body);
    res.send(nutration)
}

exports.updateNutrationById = async (req, res) => {
    const nutration = await NutrationCollection.update(req.params.id, req.body);
    res.send(nutration)
}

exports.deleteNutrationById = async (req, res) => {
    const nutration = await NutrationCollection.delete(req.params.id);
    res.send(nutration)
}

exports.getNutrationById = async (req, res) => {
    const nutration = await NutrationCollection.getById(req.params.id);
    res.send(nutration)
}
