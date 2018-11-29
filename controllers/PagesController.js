require('dotenv').config({ path: __dirname + '/../.env' });
const request = require("request");
const Page = require("../models/page");

module.exports.getPages = async function (req, res) {
  let pages = await Page.find({})
    .sort("order")
    .exec();

  res.render("pages", {
    pages
  });
}


module.exports.getSinglePage = async (req, res) => {
  try {
    const page = await Page.findOne({ "slug": req.params.slug })
    res.render(`page`, {
      page
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports.newsletterSignup = function (req, res) {
  const { email } = req.body;

  // Make sure fields are filled
  if (!email) {
    return res.json({
      code: 422,
      message: "No valid email address given!"
    });
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
        // merge_fields: {}
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us18.api.mailchimp.com/3.0/lists/343514d9d9',
    method: 'POST',
    headers: {
      Authorization: 'auth 182808b0b5516cdd6b5a99ca2d3b7a49-us18'
    },
    body: postData
  };

  request(options, (err, response) => {
    if (err) {
      return res.json({
        code: response.statusCode,
        message: error.message
      });
    } else {
      const json = JSON.parse(response.body);

      if (response.statusCode === 200 && json.errors.length === 0) {
        return res.json({
          code: 200,
          message: "Successfully subscribed to the newsletter!"
        });
      } else {
        return res.json({
          code: json.errors ? 422 : response.statusCode,
          message: "error"
        }, 422);
      }
    }
  });
}