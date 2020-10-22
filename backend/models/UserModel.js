import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    contact: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Contact',
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.withoutPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.methods.findByEmail = function (email) {
  const user = this.toObject();
  if (user.email == email) {
    delete user.password;
    return user;
  }
  return null;
};

const User = mongoose.model('User', userSchema);

export default User;
