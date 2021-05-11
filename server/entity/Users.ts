import { Schema,model, Document } from "mongoose";

export interface IUsers extends Document {
  fullName: string;
  password: string;
  email: string;
}
const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    password: { type: String, required: true, minlength: 8, maxlength: 255 },
    email: { type: String, required: true, minlength: 8, maxlength: 255 },
  },
  { timestamps: true }
);

export default model<IUsers>('Users', UserSchema);