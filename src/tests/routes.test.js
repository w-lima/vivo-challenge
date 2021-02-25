import app from '../index.js'
import supertest from 'supertest'

const request = supertest.agent(app)

describe('bot routes', () => {
  
  it('bot post successfully', async (done)=> {
    const response = await request.post('/bots').send({
      "id": "36b9f842-ee97-11e8-9423-0242ac02012",
      "name": "Aureo"
     });
    expect(response.status).toEqual(200)
    done();
  });

  it('bot post without id failed', async (done)=> {
    const response = await request.post('/bots').send({
      "name": "Aureo"
     });
    expect(response.status).toEqual(400)
    done();
  });

  it('bot post without name failed', async (done)=> {
    const response = await request.post('/bots').send({
      "id": "36b9f842-ee97-11e8-9423-0242ac02012"
     });
    expect(response.status).toEqual(400)
    done();
  });

  it('get with out parms should not exist', async (done)=> {
    const response = await request.get('/bots');

    expect(response.status).toEqual(404)
    done();
  });
});