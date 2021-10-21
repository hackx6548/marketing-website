var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  URLSlugs = require("mongoose-url-slugs");
var CourseSchema = new Schema({
  icon: {
    type: String
  },
  subicon: {
    type: String
  },
  menuicon: {
    type: String
  },
  headline: {
    type: String,
    trim: true,
    required: "Please enter a headline!"
  },
  subheading: {
    type: String,
    trim: true,
    required: "Please enter a subheading !"
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  courselength: {
    type: String
  },
  massnahmeDetails: {
    type: String
  },
  massnahmeNumber: {
    type: String
  },
  curriculumPdf: {
    type: String
  },
  jobcenterPdf: {
    type: String
  },
  companiesPdf: {
    type: String
  },
  successStory: {
    type: Schema.ObjectId, ref: "Story",
  },
  order: {
    type: Number
  },
  locations: [{ type: Schema.ObjectId, ref: "Location" }],
  archivements: [
    {
      title: String,
      icon: String,
      description: String
    }
  ],
  features: [
    {
      title: String,
      subtitle: String,
      icon: String
    }
  ],
  timeline: [
    {
      title: String,
      subtitle: String,
      time: String
    }
  ],
  language: { type: Schema.ObjectId, ref: "Language" },
  languageVersion: { type: Schema.ObjectId, ref: "Course" },
  coloraccent: {
    type: String
  },
  curriculumSectionSubheading: {
    type: String
  },
  textColor: {
    type: String,
    enum : ['black','white'],
    default: 'black'
  },
  courseLanguages: String,
  startInterval: String,
  computerKnowledge: String,
  education: String,
  requiredLanguages: String,
  other: String,
  financingoption: {
    type: Boolean, 
    default: true
  },
  joinTheTechDisruption: String,
  startYourClass: String,
  feature_on_companies_page: {
    type: Boolean,
    default: true
  },
});
CourseSchema.plugin(URLSlugs("headline"));
CourseSchema.pre("remove", function (next) {
  if (!!this.languageVersion) {
    this.languageVersion.update({ $unset: { language: 1, languageVersion: 1 } }, next)
  } else {
    next();
  }
});

module.exports = mongoose.model("Course", CourseSchema);
