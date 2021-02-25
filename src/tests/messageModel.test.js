import mongoose from 'mongoose'

const databaseName = 'vivo'

import messageModel from '../models/messageModel'
const messageData = {
    "conversationId": "7665ada8-3448-4acd-a1b7-d688e68fe9a1",
    "timestamp": "2018-11-16T23:30:52.6917722Z",
    "from": "36b9f842-ee97-11e8-9443-0242ac120002",
    "to": "16edd3b3-3f75-40df-af07-2a3813a79ce9",
    "text": "Oi! Como posso te ajudar?"
};

describe('message model tests', () => {
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
        await messageModel.deleteOne({ id: messageData.id })
    })

    it('create & save message successfully', async () => {
        const validMessage = new messageModel(messageData);
        const savedMessage = await validMessage.save();

        expect(savedMessage.conversationId).toBe(messageData.conversationId);
        expect(savedMessage.text).toBe(messageData.text);
    });

    it('find message by id successfully', async () => {
        const validMessage = new messageModel(messageData);
        await validMessage.save();

        const messageResult = await messageModel.findOne({ id: messageData.id });

        expect(validMessage.conversationId).toBe(messageResult.conversationId);
        expect(validMessage.text).toBe(messageResult.text);
    });
});
