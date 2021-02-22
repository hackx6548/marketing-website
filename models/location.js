const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  street: {
    type: String
  },
  zip: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  isCampus: {
    type: Boolean
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String
  },
  order: {
    type: Number,
    default: 99

  },
  contactEmployee: [{
    type: Schema.ObjectId,
    ref: "Employee"
  }]
});

LocationSchema
  .virtual('color')
  .get(function () {
    return intToRGB(hashCode(this.name));
  })

function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

module.exports = mongoose.model("Location", LocationSchema);
