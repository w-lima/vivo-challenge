import mongoose from 'mongoose'

const databaseName = 'test'

import botModel from '../models/botModel.js'
const botData = { id: '36b9f842-ee97-11e8-9443-0242ab02010', name: 'Aureo' };

describe('bot model tests', () => {
    let connection;
    let db;

    beforeAll(async () => {
        const url = `mongodb://localhost/${databaseName}`
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    // Cleans up database between each test
    afterEach(async () => {
        await botModel.deleteOne({id: botData.id})
    })

    it('create & save bot successfully', async () => {
        const validBot = new botModel(botData);
        const savedBot = await validBot.save();

        expect(savedBot.name).toBe(botData.name);
        expect(savedBot.id).toBe(botData.id);
    });

    it('find bot successfully', async () => {
        const validBot = new botModel(botData);
        await validBot.save();

        const botResult = await botModel.findOne({ id: botData.id } );

        expect(botResult.name).toBe(botData.name);
        expect(botResult.id).toBe(botData.id);
    });

    it('delete bot successfully', async () => {
        const validBot = new botModel(botData);
        await validBot.save();

        await botModel.deleteOne({ id: botData.id } );

        const botResult = await botModel.findOne({ id: botData.id } );
        expect(botResult).toBe(null)
    });
});
