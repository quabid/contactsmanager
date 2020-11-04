import mongoose from 'mongoose';

const geoSchema = new mongoose.Schema({
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const emailSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: 'home',
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const phoneSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: 'home',
    },
    number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const addressSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: 'home',
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    locations: [geoSchema],
  },
  {
    timestamps: true,
  }
);

const contactSchema = new mongoose.Schema({
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
  emails: [emailSchema],
  phones: [phoneSchema],
  addresses: [addressSchema],
});

contactSchema.methods.findByEmail = function (email) {
  const contact = this.toObject();
  if (contact.emails.find((x) => x.email == email) != undefined) {
    return contact;
  }
  return null;
};

contactSchema.methods.findByPhone = function (phone) {
  const contact = this.toObject();
  if (contact.phones.find((x) => x.phone == phone) != undefined) {
    return contact;
  }
  return null;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
