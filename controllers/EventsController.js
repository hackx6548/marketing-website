require("dotenv").config({path: __dirname + "/../.env"});
const request = require("request");
const Event = require("../models/event");
const Location = require("../models/location");
const fetchEventsByLocation = require("../helpers/fetch_events_by_location");

module.exports.getEvents = async (req, res) => {
  const eventsByLocation = await fetchEventsByLocation(true, 0);
  //TODO replace by API call
  const zoomresponse = {
    "page_count": "1",
    "page_number": "1",
    "page_size": "30",
    "total_records": "1",
    "webinars": [
      {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Education councelling orientation",
        "type": "5",
        "duration": "60",
        "start_time": "2019-09-24T22:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001000/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Webdevelopemnt remote lesson",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-04T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001001/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Webdevelopemnt remote lesson",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-04T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001001/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Webdevelopemnt remote lesson",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-04T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001001/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Webdevelopemnt remote lesson",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-04T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001001/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Webdevelopemnt remote lesson",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-04T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001001/awesomewebinar"
      }, {
        "uuid": "dsghfkhaewfds",
        "id": 0001000,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "IT-systemitegration hardware mashup",
        "type": "5",
        "duration": "120",
        "start_time": "2012-04-05T11:00:00Z",
        "timezone": "Berlin/CEST",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001002/awesomewebinar"
      }
    ]
  }
  res.render("events", {
    eventsByLocation,
    zoomresponse
  });
};

module.exports.getEventsByLocation = async (req, res) => {
  const zoomresponse = {
    "page_count": "1",
    "page_number": "1",
    "page_size": "30",
    "total_records": "1",
    "webinars": [
      {
        "uuid": "dsghfkhaewfds",
        "id": 0001001,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Learn more about Zoom APIs",
        "type": "5",
        "duration": "60",
        "start_time": "2019-09-24T22:00:00Z",
        "timezone": "America/Los_Angeles",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001000/awesomewebinar"
      },
      {
        "uuid": "dsghfkhaewfds",
        "id": 0001000,
        "host_id": "24654130000000",
        "topic": "My Webinar",
        "agenda": "Learn more about Zoom APIs",
        "type": "5",
        "duration": "60",
        "start_time": "2019-09-24T22:00:00Z",
        "timezone": "America/Los_Angeles",
        "created_at": "2019-08-30T22:00:00Z",
        "join_url": "https://zoom.us/0001000/awesomewebinar"
      }
    ]
  }
  let location = await Location.findOne({
    name: {$regex: new RegExp(req.params.location, "i")}
  });

  if (location) {
    let events = await Event.find({
      location: location._id,
      start: {$gt: new Date()}
    });
    if (events && events.length > 0) {
      res.render("eventsByLocation", {
        events,
        location,
        zoomresponse
      });
    } else {
      res.redirect("/events");
    }
  } else {
    res.redirect("/events");
  }
};
