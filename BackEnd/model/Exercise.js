const mongoose = require('mongoose');
const ExerciseSchema = mongoose.Schema({
    type:{ type: String, required: true },
    list:{ type: String, required: true }
})
const ExerciseModel = mongoose.model('exercise', ExerciseSchema)
class ExerciseCollection {
    static async getAll() {
        const exercises = await ExerciseModel.find();
        return exercises;
    }
    static async create(obj) {
        const exercise = new ExerciseModel(obj);
        await exercise.save();
        return exercise;
    }
    static async getById(id){
        const exercise = await ExerciseModel.findOne({_id: id});
        return exercise;
    }
    static async update(id, obj){
        const exercise = await ExerciseModel.updateOne({_id: id}, obj);
        return exercise;
    }
    static async delete(id){
        const exercise = await ExerciseModel.deleteOne({_id: id});
        return exercise;
    }
}
module.exports = ExerciseCollection;