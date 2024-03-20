const ExerciseCollection = require('../model/Exercise')
exports.getAll = async (req, res) => {
    const exercises = await ExerciseCollection.getAll();
    res.send(exercises);
}

exports.create = async (req, res) => {
    const exercise = await ExerciseCollection.create(req.body);
    res.send(exercise)
}

exports.updateExerciseById = async (req, res) => {
    const exercise = await ExerciseCollection.update(req.params.id, req.body);
    res.send(exercise)
}

exports.deleteExerciseById = async (req, res) => {
    const exercise = await ExerciseCollection.delete(req.params.id);
    res.send(exercise)
}

exports.getExerciseById = async (req, res) => {
    const exercise = await ExerciseCollection.getById(req.params.id);
    res.send(exercise)
}
