import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const MessageSchema = mongoose.Schema(
  {
    id: {type: String, unique : true,default: uuidv4, index: true},
    conversationId: {type: String},
    timestamp: { type: Date, default: Date.now },
    from: {type: String},
    to: {type: String},
    text: {type: String}
  }
);

mongoose.set('useCreateIndex', true);

export default mongoose.model('Message', MessageSchema);
