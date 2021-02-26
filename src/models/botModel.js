import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const BotSchema = mongoose.Schema(
  {
    id: {type: String, unique : true, default: uuidv4, index: true} ,
    name: {type: String}
  }
);

mongoose.set('useCreateIndex', true);

export default mongoose.model('bots', BotSchema);
