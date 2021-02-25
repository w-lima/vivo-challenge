import constants from '../constants.js';
import messageModel from '../models/messageModel.js'

class MessageControler {
    async create(req, res) {
        let message = new messageModel(req.body)
        await message.save((err) => {
            if (err) {
                return res.status(409).json(constant.fail)
            }
            return res.json(constants.success)
        })
        return res.status(500).json(constant.fail);
    }

    async find(req, res) {
        let query = {
            id: req.params.id
        }
        await messageModel.findOneAndUpdate(query, (err, item) => {
            if (err) {
                return res.status(400).json(constants.fail)
            }
            return res.json(item)
        });
    }

    async findByConversation(req, res) {
        let query = {
            conversationId: req.query.conversationId
        }
        await messageModel.find(query, (err, item) => {
            if (err) {
                return res.status(404).json(constants.fail)
            }
            return res.json(item)
        });
    }
}

export default new MessageControler();
