import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  owner: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'User',
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
      },
    },
  ],
  phones: [
    {
      category: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
  ],
  addresses: [
    {
      category: {
        type: String,
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

contactSchema.methods.findByPhone = function (phone) {
  const contact = this.toObject();
  if (contact.phones.find(x => x.phone == phone) != undefined) {
    return contact;
  }
  return null;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
