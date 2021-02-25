import botModel from '../models/botModel.js'
import constant from '../constants.js'
class BotsControler {
    async create(req, res) {
        let bot = new botModel(req.body)
        await bot.save((err) => {
            if (err) {
                return res.status(409).json(constant.fail)
            }
            return res.json(constant.success)
        })

    }

    async delete(req, res) {
        await botModel.deleteOne({ id: req.params.id }, (err) => {
            if (err) {
                return res.status(409).json(constant.fail)
            }
            return res.json(constant.success)
        })

    }

    async find(req, res) {
        let query = {
            id: req.params.id
        }

        await botModel.findOne(query, (err, item) => {
            if (err) {
                return res.status(404).send({
                    error: err.message
                });
            }
            return res.json(item)
        });
    }

    async att(req, res) {
        let query = {
            id: req.params.id
        }
        let update = {
            name: req.params.name
        }
        await botModel.findOneAndUpdate(query, update, (err, item) => {
            if (err) {
                return res.status(404).send({
                    error: err.message
                });
            }
            return res.json(item)
        });
    }
}

export default new BotsControler();

