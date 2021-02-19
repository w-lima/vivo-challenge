import express from 'express';
import routeValidator from 'express-route-validator'
import botsControler from './controllers/botsControler.js'
import messageControler from './controllers/messageControler.js'
import validator from './validator.js';

const routes = new express.Router();

//bot routes
routes.post('/bots', routeValidator.validate(validator.BOT_POST_VALIDADE), botsControler.create);
routes.get('/bots/:id', botsControler.find);

//messages routes
routes.post('/messages', messageControler.create);
routes.get('/messages/:id', routeValidator.validate(validator.MESSAGES_GET_PARAMS), messageControler.find);
routes.get('/messages', routeValidator.validate(validator.MESSAGES_GET_QUERY), messageControler.findByConversation);

export default routes;
