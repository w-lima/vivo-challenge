import app from '../index.js'
import supertest from 'supertest'
import botModel from '../models/botModel.js'
import messageModel from '../models/messageModel'

const request = supertest.agent(app)
const botData = { id: '36b9f842-ee97-11e8-9443-0242ab02010', name: 'Aureo' };
let server;
const messageData = {
  "conversationId": "7665ada8-3448-4acd-a1b7-d688e68fe9a1",
  "timestamp": "2018-11-16T23:30:52.6917722Z",
  "from": "36b9f842-ee97-11e8-9443-0242ac120002",
  "to": "16edd3b3-3f75-40df-af07-2a3813a79ce9",
  "text": "Oi! Como posso te ajudar?"
};

describe('bot routes', () => {

  beforeAll(async (done) => {
    server = app.listen(4000, () => {
      done();
    });
  });


  afterAll(async () => {
    await server.close();
  });

  afterEach(async () => {
    await botModel.deleteOne({ "id": botData.id })
  })

  it('bot post successfully', async (done) => {
    const response = await request.post('/bots').send(botData);
    expect(response.status).toEqual(200);
    expect(response.body).not.toBeNull();
    done();
  });

  it('bot post without id failed', async (done) => {
    const response = await request.post('/bots').send({
      "name": botData.name
    });
    expect(response.status).toEqual(400);
    expect(response.body).not.toBeNull();
    done();
  });

  it('bot post without name failed', async (done) => {
    const response = await request.post('/bots').send({
      "id": botData.id
    });
    expect(response.status).toEqual(400);
    expect(response.body).not.toBeNull();
    done();
  });

  it('get without parms should not exist', async (done) => {
    const response = await request.get('/bots');

    expect(response.status).toEqual(404);
    expect(response.body).not.toBeNull();
    done();
  });
});

describe('message routes', () => {

  afterEach(async () => {

  })

  it('post successfully', async (done) => {
    const response = await request.post('/messages').send(messageData);
    expect(response.status).toEqual(200)
    expect(response.body).not.toBeNull();
    done();
  });

  it('post error', async (done) => {
    let data = messageData;
    data.timestamp = "invalid value"
    const response = await request.post('/messages').send(data);
    expect(response.status).toEqual(500);
    expect(response.body).not.toBeNull();
    done();
  });

  it('get with parms be a 200 status', async (done) => {
    const response = await request.get('/messages')
      .query({ conversationId: messageData.conversationId });

    expect(response.status).toEqual(200)
    done();
  });

  it('get without parms be a 400 status', async (done) => {
    const response = await request.get('/messages');
    expect(response.status).toEqual(400)
    expect(response.body).not.toBeNull();
    done();
  });

  it('put should not exist', async (done) => {
    const response = await request.put('/messages');

    expect(response.status).toEqual(404);
    expect(response.body).not.toBeNull();
    done();
  });

  it('del should not exist', async (done) => {
    const response = await request.del('/messages');

    expect(response.status).toEqual(404);
    expect(response.body).not.toBeNull();
    done();
  });

});