import mongoose from 'mongoose';




const contactSchema = new mongoose.Schema({
owner: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'User',
    require: true,
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
        require: true,
      },
      email: {
        type: String,
        require: true,
        unique: true,
      },
    },
  ],
  phones: [
    {
      category: {
        type: String,
        require: true,
      },
      phone: {
        type: String,
        require: true,
        unique: true,
      },
    },
  ],
  addresses: [
    {
      category: {
        type: String,
        require: true,
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
  if (contact.emails.find((x) => x.email == email) != undefined) {
    return contact;
  }
  return null;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
