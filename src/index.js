import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js'
const app = express()
const port = 3000
const databaseName = 'vivo'

const url = `mongodb://localhost/${databaseName}`
const db = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json())
app.use(routes)


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
})



export default app;

