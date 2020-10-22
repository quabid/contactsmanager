import mongoose from 'mongoose';

const geoSchema = mongoose.Schema({
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const emailSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
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

const phoneSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
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

const addressSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
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

const contactSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  emails: [emailSchema],
  phones: [phoneSchema],
  addresses: [addressSchema],
});

contactSchema.methods.findByEmail = function (email) {
  const contact = this.toObject();
  if (contact.emails.find((x) => x == email) != undefined) {
    return contact;
  }
  return null;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
