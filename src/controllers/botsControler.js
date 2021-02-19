import botModel from '../models/botModel.js'

class BotsControler {
    async create(req, res) {
        let teste = new botModel(req.body)
        await teste.save()
        return res.json({sucess:true})
    }

    async find(req,res){
        let query = {
            id: req.params.id 
        }

        let queryResult = await botModel.findOne(query)
        res.json(queryResult)
    }
}

export default new BotsControler();

