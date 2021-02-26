import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema(
  {
    id: {type: String, unique : true,dropDups: true},
    conversationId: {type: String},
    timestamp: { type: Date, default: Date.now },
    from: {type: String},
    to: {type: String},
    text: {type: String}
  }
);

mongoose.set('useCreateIndex', true);

export default mongoose.model('Message', MessageSchema);
