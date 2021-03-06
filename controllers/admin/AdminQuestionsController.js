require("dotenv").config({ path: __dirname + "/../.env" });
const Question = require("../../models/question");
const Answer = require("../../models/answer");
const requestPromise = require("request-promise");
const { jsonResponseObject } = require("../../helpers/helper");

module.exports.renderQuestions = async (req, res) => {
  try {
    res.render("admin/adminQuestions");
  } catch (err) {
    console.log(err);
  }
};

module.exports.getQuestions = async (req, res) => {
  try {
    let questions = await Question.find()
    const response = {
      questions
    }
    if (req.session.passport && req.session.passport.user && req.headers.referer.indexOf('/admin') !== -1) {
      const properties = [
        `https://api.hubapi.com/properties/v1/contacts/properties`
      ]
      let promises = []
      properties.forEach(property => {
        var options = {
          method: 'GET',
          url: property,
          qs: { hapikey: process.env.HUBSPOT_API_KEY },
          headers: {
            'Content-Type': 'application/json'
          },
          json: true
        };
        promises.push(requestPromise(options))
      })
      try {
        const [contactProperties, answers] = await Promise.all([...promises, Answer.find().exec()])
        response.hb_fields = [...contactProperties]
        response.answers = answers
      } catch (error) {
        console.log('error', error);
      } finally {
        return jsonResponseObject(res, response)
      }
    } else {
      return jsonResponseObject(res, response)
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.getQuestionRenderSelectors = async (req, res) => {
  try {
    let questions = await Question.find()
      .select("name renderselector")
      .exec();
    const response = {
      questions
    }
    return jsonResponseObject(res, response)
  } catch (err) {
    console.log(err);
  }
};
module.exports.getQuestion = async (req, res) => {
  try {
    let questions = await Question.findOne({ name: req.params.questions })
    const response = {
      questions
    }
    return jsonResponseObject(res, response)
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateQuestion = async (req, res) => {
  try {
    let question
    if (req.body._id === "") {
      question = new Question({
        name: req.body.name,
        model: req.body.model,
        active: false,
        sendaltemail: false,
        renderselector: ""
      });
    } else {
      question = await Question.findById(req.body._id).exec({});
      if (question) {
        question.name = req.body.name
        question.model = req.body.model
        question.active = req.body.active
        question.sendaltemail = req.body.sendaltemail
        question.renderselector = req.body.renderselector
      }
    }
    await question.save()
    return jsonResponseObject(res, question)
  } catch (err) {
    return jsonResponseObject(res, "", err)
  }
};