import mongoose, { Schema } from 'mongoose';
import Userinterface from '../interfaces/dbInterfaces/UserInterface';

// ---------creating schema
const UserSchema : Schema = new mongoose.Schema({
  local: {
    name: String,
    email: {
      type: String,
      required: true,            
    },
    password: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model<Userinterface>('User', UserSchema);