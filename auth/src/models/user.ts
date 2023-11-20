import { Schema, Document, model, type Model } from "mongoose";

// an interface that describest the properties
// required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// an interface that describes the
// properties that a user model has
interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// an interface that describes the
// properties that a user has
interface UserDoc extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<UserDoc, UserModel>("User", userSchema);

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);

export { User };
