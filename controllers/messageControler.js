import messageModel from '../models/messageModel.js'

class MessageControler {
    async create(req, res) {
        return res.json();
    }

    async find(req, res) {
        let query = {
            id: req.params.id
        }
        let queryResult = await messageModel.findOne(query)
        return res.json(queryResult)
    }

    async findByConversation(req, res) {
        let query = {
            conversationId: req.query.conversationId
        }
        let queryResult = await messageModel.find(query)
        return res.json(queryResult)
    }
}

export default new MessageControler();
