import botModel from '../models/botModel.js'
import constant from '../constants.js'
class BotsControler {
    async create(req, res) {
        let bot = new botModel(req.body)
        await bot.save( (err) =>{
            if(err){
                return res.status(409).json(constant.fail)
            }
            return res.json(constant.sucess)
        })
        
    }

    async delete(req, res) {
        await botModel.remove(req.body, (err) =>{
            if(err){
                return res.status(409).json(constant.fail)
            }
            return res.json(constant.sucess)
        })
        
    }

    async find(req,res){
        let query = {
            id: req.params.id 
        }

        await botModel.findOne(query, (err, item) =>{
            if(err){
                return res.status(400).send({
                    error: err.message
                  });
            }
            return res.json(item)
        });
    }
}

export default new BotsControler();

