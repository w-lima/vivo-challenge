import mongoose from 'mongoose';

const BotSchema = mongoose.Schema(
  {
    id: {type: String, unique : true,dropDups: true} ,
    name: {type: String}
  }
);

export default mongoose.model('bots', BotSchema);
