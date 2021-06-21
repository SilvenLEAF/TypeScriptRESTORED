import { Document } from 'mongoose';

interface LocalInterface {
  email: string,
  password: string,

  resetToken?: string,
  resetTokenExpirationTime?: Date,

  verifyToken?: string,
  verifyTokenExpirationTime?: Date,

  username: string,  
}


export default interface Userinterface extends Document {
  local?: LocalInterface
}