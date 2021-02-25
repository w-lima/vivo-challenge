import constants from '../constants.js';
import messageModel from '../models/messageModel.js'

class MessageControler {
    create(req, res) {
        let message = new messageModel(req.body)
        return message.save().then(data => {
            return res.json(data)
        })
        .catch(err => {
            return res.status(500).json(constants.fail)
        });
    }

    find(req, res) {
        let query = {
            id: req.params.id
        }
        return messageModel.findOneAndUpdate(query)
            .then(data => {
                return res.json(data)
            })
            .catch(err => {
                return res.status(500).json(constants.fail)
            });
    }

    findByConversation(req, res) {
        let query = {
            conversationId: req.query.conversationId
        }
        return messageModel.find(query)
            .then(data => {
                return res.json(data)
            })
            .catch(err =>{
                return res.status(500).json(constants.fail)
            });
    }
}

export default new MessageControler();
