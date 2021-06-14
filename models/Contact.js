import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'Personal',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('contact', ContactSchema);
