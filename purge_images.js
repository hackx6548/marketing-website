require("dotenv").config({ path: __dirname + "./.env" });
const { mongopath } = require('./helpers/helper')

console.log(process.env.IMAGE_UPLOAD_DIR);

const mongoose = require('mongoose')
const {courseFields} = require("./controllers/admin/AdminCoursesController");
const fs = require("fs");
mongoose.set('useCreateIndex', true)
try {
  mongoose.connect(mongopath, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  })
} catch (err) {
  console.log(`Please set a mongo path in your .env \n\n${err}`)
}
const uploads = fs.readFileSync(process.env.IMAGE_UPLOAD_DIR);
console.log(uploads);
