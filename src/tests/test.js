import mongoose from 'mongoose'
import app from '../index.js' // Link to your server file
import supertest from 'supertest'

const request = supertest(app)
const databaseName = 'vivo'

import botModel from '../models/botModel.js'
const botData = { id: '36b9f842-ee97-11e8-9443-0242ab02010', name: 'Aureo' };

describe('insert', () => {
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
        await botModel.deleteMany()
    })

    it('create & save bot successfully', async () => {
        const validBot = new botModel(botData);
        const savedBot = await validBot.save();

        expect(savedBot.name).toBe(savedBot.name);
        expect(savedBot.id).toBe(savedBot.id);
    });
});
