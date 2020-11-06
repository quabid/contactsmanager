import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  nname: {
    type: String,
  },
  emails: [
    {
      category: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
    },
  ],
  phones: [
    {
      category: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],
  addresses: [
    {
      category: {
        type: String,
        required: true,
      },
      address: {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        zipcode: {
          type: String,
        },
      },
      geo: {
        type: String,
      },
    },
  ],
});

contactSchema.methods.findByEmail = function (email) {
  const contact = this.toObject();
  if (contact.emails.find(x => x.email == email) != undefined) {
    return contact;
  }
  return null;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
