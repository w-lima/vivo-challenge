import botModel from '../models/botModel.js'
import constant from '../constants.js'
class BotsControler {
    create(req, res) {
        let bot = new botModel(req.body)
        return bot.save()
            .then(data => {
                return res.json(data)
            })
            .catch(err => {
                return res.status(500).json(constants.fail)
            })

    }

    delete(req, res) {
        botModel.deleteOne({ id: req.params.id })
            .then(data => {
                return res.json(constant.success)
            })
            .catch(err => {
                return res.status(500).json(constant.fail)
            })

    }

    find(req, res) {
        let query = {
            id: req.params.id
        }
        return botModel.findOne(query)
            .then(data => {
                return res.json(data)
            })
            .catch(err => {
                return res.status(500).json(constants.fail)
            });
    }

    att(req, res) {
        let query = {
            id: req.params.id
        }
        let update = {
            name: req.params.name
        }
        return botModel.findOneAndUpdate(query, update)
            .then(data => {
                return res.json(data)
            })
            .catch(err => {
                return res.status(500).json(constants.fail)
            });
    }
}

export default new BotsControler();

