import constants from '../constants.js';
import messageModel from '../models/messageModel.js'

class MessageControler {
    async create(req, res) {
        return res.json();
    }

    async find(req, res) {
        let query = {
            id: req.params.id
        }
        await messageModel.findOne(query, (err, item) =>{
            if(err){
                return res.status(400).json(constants.fail)
            }
            return res.json(item)
        });
    }

    async findByConversation(req, res) {
        let query = {
            conversationId: req.query.conversationId
        }
        await messageModel.find(query, (err, item) =>{
            if(err){
                return res.status(400).json(constants.fail)
            }
            return res.json(item)
        });
    }
}

export default new MessageControler();
