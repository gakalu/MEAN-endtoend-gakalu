const mongoose = require('mongoose');
const NutrationSchema = mongoose.Schema({
    type:{ type: String, required: true },
    list:{ type: String, required: true }
})
const NutrationModel = mongoose.model('nutration', NutrationSchema)
class NutrationCollection {
    static async getAll() {
        const nutration = await NutrationModel.find();
        return nutration;
    }
    static async create(obj) {
        const nutration = new NutrationModel(obj);
        await nutration.save();
        return nutration;
    }
    static async getById(id){
        const nutration = await NutrationModel.findOne({_id: id});
        return nutration;
    }
    static async update(id, obj){
        const nutration = await NutrationModel.updateOne({_id: id}, obj);
        return nutration;
    }
    static async delete(id){
        const nutration = await NutrationModel.deleteOne({_id: id});
        return nutration;
    }
}

module.exports = NutrationCollection;