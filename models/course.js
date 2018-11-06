var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a course name!'
  },
  content: {
    type: String,
    trim: true,
    required: 'Please enter a course content !'
  },
  type: {
    type: String,
    trim: true,
    required: 'Please enter a course type !'
  },
  locations: [{ type: Schema.ObjectId, ref: "Location" }],

});

module.exports = mongoose.model("Course", CourseSchema);