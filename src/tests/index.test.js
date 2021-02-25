import app from '../index.js' // Link to your server file

describe('server working', () => {
  
  it('should exist', async (done)=> {
    expect(app).toBeDefined();
    done();
  });
});