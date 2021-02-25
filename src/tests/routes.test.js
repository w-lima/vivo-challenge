import app from '../index.js'
import supertest from 'supertest'
import botModel from '../models/botModel.js'

const request = supertest.agent(app)
const botData = { id: '36b9f842-ee97-11e8-9443-0242ab02010', name: 'Aureo' };

describe('bot routes', () => {

  afterEach(async () => {
    await botModel.deleteOne({ "id": "36b9f842-ee97-11e8-9423-0242ac02012" })
  })

  it('bot post successfully', async (done) => {
    const response = await request.post('/bots').send(botData);
    expect(response.status).toEqual(200)
    done();
  });

  it('bot post without id failed', async (done) => {
    const response = await request.post('/bots').send({
      "name": botData.name
    });
    expect(response.status).toEqual(400)
    done();
  });

  it('bot post without name failed', async (done) => {
    const response = await request.post('/bots').send({
      "id": botData.id
    });
    expect(response.status).toEqual(400)
    done();
  });

  it('get with out parms should not exist', async (done) => {
    const response = await request.get('/bots');
    expect(response.status).toEqual(404)
    done();
  });
});