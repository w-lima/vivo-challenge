import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema(
  {
    conversationId: {type: String},
    timestamp: { type: Date, default: Date.now },
    from: {type: String},
    to: {type: String},
    text: {type: String}
  }
);

export default mongoose.model('Message', MessageSchema);
