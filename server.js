var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _this = this;
var _a = require('./helpers/helper'), mongopath = _a.mongopath, getAsyncRedis = _a.getAsyncRedis;
var express = require('express');
var redis = require('redis');
var app = express();
var i18nModule = require('i18n');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);
var promisify = require('util').promisify;
var Course = require('./models/course');
var Page = require('./models/page');
var Menulocation = require('./models/menulocation');
var LocationModel = require('./models/location');
var Language = require('./models/language');
var Setting = require('./models/setting');
var languages = require('./seeddata').languages;
var flash = require('connect-flash');
var cron = require('node-cron');
var EventsController = require('./controllers/admin/AdminEventsController');
var mongoose = require('mongoose');
var getAvailableTranslations = require('./controllers/AbstractController').getAvailableTranslations;
var compression = require('compression');
var updateLocaleFile = require('./helpers/helper').updateLocaleFile;
require('source-map-support').install();
// connect to redis server and get an extended client with promisified
// methods getAsync() and setAsync()
var redisClient = redis.createClient();
(function () {
    return __awaiter(_this, void 0, void 0, function () {
        var en, de, setting, createLocalesFile, res, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    en = Language.findOne({ title: 'en' });
                    de = Language.findOne({ title: 'de' });
                    setting = Setting.findOne().exec({});
                    createLocalesFile = updateLocaleFile();
                    return [4 /*yield*/, Promise.all([en, de, createLocalesFile, setting])];
                case 1:
                    res = _c.sent();
                    if (!!res[0]) return [3 /*break*/, 3];
                    console.log('no english language created. Seeding EN lang into mongoose');
                    return [4 /*yield*/, Language.create(languages[0])];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    if (!!res[1]) return [3 /*break*/, 5];
                    console.log('no german language created. Seeding DE lang into mongoose');
                    return [4 /*yield*/, Language.create(languages[1])];
                case 4:
                    _c.sent();
                    _c.label = 5;
                case 5:
                    _b = (_a = Object).keys;
                    return [4 /*yield*/, Course.collection.getIndexes()];
                case 6:
                    if (!_b.apply(_a, [_c.sent()]).includes('order_1')) return [3 /*break*/, 8];
                    return [4 /*yield*/, Course.collection.dropIndex('order_1')];
                case 7:
                    _c.sent();
                    _c.label = 8;
                case 8:
                    if (!!res[3]) return [3 /*break*/, 10];
                    console.log('No Setting created yet, inserting empty Setting model');
                    return [4 /*yield*/, Setting.create({})];
                case 9:
                    _c.sent();
                    _c.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
})();
if (process.env.HUBSPOT_API_KEY === undefined) {
    console.error('HUBSPOT_API_KEY is not defined in .env');
    process.exit();
}
if (process.env.USE_REDIS !== undefined && process.env.USE_REDIS === 'true') {
    // console.log('Redis enabled')
    redisClient = getAsyncRedis();
}
else if (process.env.USE_REDIS === 'false') {
    // console.log('Redis disabled')
}
else {
    console.error('USE_REDIS is not defined in .env');
    process.exit();
}
mongoose.set('useCreateIndex', true);
try {
    mongoose.connect(mongopath, { useNewUrlParser: true, useUnifiedTopology: true }).then(function (res) {
    });
}
catch (err) {
    console.log("Please set a mongo path in your .env \n\n" + err);
}
app.use(compression());
i18nModule.configure({
    objectNotation: true,
    locales: ['en', 'de'],
    queryParameter: 'lang',
    autoReload: true,
    keySeparator: "$",
    nsSeparator: "%",
    directory: __dirname + '/locales'
});
app.use(i18nModule.init);
app.use(function (req, res, next) {
    // console.log('i18n lan ==> ',i18n.locale)
    res.setLocale(req.params.locale || '');
    next();
});
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'node_modules/')));
app.use('/assets', express.static(path.join(__dirname, 'assets/css/')));
app.use('/assets', express.static(path.join(__dirname, 'assets/icons/')));
app.use('/fonts', express.static(path.join(__dirname, 'assets/fonts/')));
app.use('/media', express.static(path.join(__dirname, 'assets/media/')));
app.use('/images', express.static(path.join(__dirname, 'uploads/images')));
// if asset it not found, dont pass missing image request to next and finish with 404 for missing image
app.use(function (req, res, next) {
    if (req.url.includes("/media/") || req.url.includes("/images/")) {
        res.sendStatus(404);
    }
    else {
        next();
    }
});
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET || 'notaverysecuresecret',
    key: process.env.SESSION_KEY || 'notaverysecurekey',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(function (req, res, next) {
    var query = req.query;
    if (!!query && Object.keys(query).length > 0 && (req.session.utmParams === undefined || req.session.utmParams.length === 0)) {
        req.session.utmParams = [];
        var mappedParams = __assign({}, Object.keys(query).map(function (paramKey) {
            var _a, _b;
            return Array.isArray(query[paramKey]) ? (_a = {}, _a[paramKey] = __spread(new Set(query[paramKey])), _a) : (_b = {}, _b[paramKey] = query[paramKey], _b);
        }));
        req.session.utmParams = Object.assign(mappedParams);
    }
    next();
});
app.use(function (req, res, next) {
    (res.locals.messages = {
        danger: req.flash('danger'),
        warning: req.flash('warning'),
        success: req.flash('success')
    }),
        (app.locals.pathclass = req.url
            .replace(/^\/de/g, '')
            .replace(/^\/en/g, '')
            .replace(/^\//g, '')
            .replace(/\//g, '-')
            .replace(/\-$/g, '')
            .toLowerCase());
    var match = req.url.match('[^/]+(?=/$|$)');
    res.locals.title = 'DigitalCareerInstitute';
    app.locals.moment = require('moment');
    res.locals.live = req.headers.host.includes('digitalcareerinstitute.org');
    if (match) {
        match = match[0].replace(/\//g, ' ');
        res.locals.title =
            match.charAt(0).toUpperCase() + match.slice(1).replace(/(.*)\?.*/, "$1") + ' | ' + res.locals.title;
    }
    console.log(req.method, req.headers.host + req.url);
    next();
});
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    return __awaiter(_this, void 0, void 0, function () {
        var navData, getNavData, error_1, query, courses_1, footerCat, headerCat, _a, locations_1, settings_1, footerPages_1, headerPages_1, error_2, courses, settings, locations, headerPages, footerPages, rawPath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    navData = null;
                    if (req.originalUrl.startsWith('/images') || req.headers['content-type'] === 'application/json') {
                        next();
                        return [2 /*return*/];
                    }
                    if (!(redisClient !== undefined && process.env.USE_REDIS === 'true')) return [3 /*break*/, 4];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, redisClient.getAsync("navData" + req.session.locale)];
                case 2:
                    getNavData = _b.sent();
                    navData = JSON.parse(getNavData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error('Redis ERROR: Could not get navigation data: ' + error_1);
                    return [3 /*break*/, 4];
                case 4:
                    if (!(navData === null)) return [3 /*break*/, 15];
                    return [4 /*yield*/, getAvailableTranslations(req, res)];
                case 5:
                    query = _b.sent();
                    return [4 /*yield*/, Course
                        .find(query)
                        .sort({ order: 1 })
                        .exec()];
                case 6:
                    courses_1 = _b.sent();
                    return [4 /*yield*/, Menulocation.findOne({ name: 'footer' })];
                case 7:
                    footerCat = _b.sent();
                    return [4 /*yield*/, Menulocation.findOne({ name: 'header' })];
                case 8:
                    headerCat = _b.sent();
                    return [4 /*yield*/, Promise.all([
                        LocationModel.find({}).sort({ order: 1 }).exec(),
                        Setting.findOne().exec({}),
                        Page.find(Object.assign(query, { menulocations: { $in: [footerCat] } })).sort({ order: 1 }),
                        Page.find(Object.assign(query, { menulocations: { $in: [headerCat] } })).sort({ order: 1 })
                    ])];
                case 9:
                    _a = __read.apply(void 0, [_b.sent(), 4]), locations_1 = _a[0], settings_1 = _a[1], footerPages_1 = _a[2], headerPages_1 = _a[3];
                    navData = {
                        courses: courses_1,
                        locations: locations_1,
                        settings: settings_1,
                        headerPages: headerPages_1,
                        footerPages: footerPages_1
                    };
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, 13, , 14]);
                    if (!(process.env.USE_REDIS === 'true' && undefined)) return [3 /*break*/, 12];
                    return [4 /*yield*/, redisClient.setAsync("navData" + req.session.locale, JSON.stringify(navData))];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    error_2 = _b.sent();
                    console.error('Redis ERROR: Could not save navigation data: ' + error_2);
                    return [3 /*break*/, 14];
                case 14: return [3 /*break*/, 16];
                case 15:
                    console.log('using cached data');
                    _b.label = 16;
                case 16:
                    courses = navData.courses, settings = navData.settings, locations = navData.locations, headerPages = navData.headerPages, footerPages = navData.footerPages;
                    res.locals.user = req.user || null;
                    rawPath = req.path.replace(req.session.locale + "/", '');
                    res.locals.currentPath = rawPath;
                    res.locals.locations = locations;
                    res.locals.courses = courses;
                    res.locals.settings = settings;
                    res.locals.headerPages = headerPages;
                    res.locals.footerPages = footerPages;
                    next();
                    return [2 /*return*/];
            }
        });
    });
});
app.use(function (req, res, next) {
    req.login = promisify(req.login, req);
    next();
});
app.use(function (req, res, next) {
    var start = new Date();
    if (res._responseTime)
        return next();
    res._responseTime = true;
    res.on('header', function () {
        var date = new Date();
        var duration = date.now() - start.now();
        res.setHeader('X-Response-Time', duration + 'ms');
    });
    next();
});
var i18nRoutes = require('./routes/i18n');
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var storiesRoutes = require('./routes/stories');
var pagesRoutes = require('./routes/pages');
// let jobsRoutes = require("./routes/jobs");
var employeesRoutes = require('./routes/employees');
var eventsRoutes = require('./routes/events');
var coursesRoutes = require('./routes/courses');
var redirects = require('./routes/redirects');
var redirectsAdminRoutes = require('./routes/admin/redirects');
var menulocationAdminRoutes = require('./routes/admin/menulocations');
var storiesAdminRoutes = require('./routes/admin/stories');
var coursesAdminRoutes = require('./routes/admin/courses');
var pagesAdminRoutes = require('./routes/admin/pages');
var partnersAdminRoutes = require('./routes/admin/partners');
// let jobsAdminRoutes = require("./routes/admin/jobs");
var employeesAdminRoutes = require('./routes/admin/employees');
var locationsAdminRoutes = require('./routes/admin/locations');
var eventsAdminRoutes = require('./routes/admin/events');
var contactsAdminRoutes = require('./routes/admin/contacts');
var usersAdminRoutes = require('./routes/admin/users');
var settingsAdminRoutes = require('./routes/admin/settings');
app.use(i18nRoutes);
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/stories', storiesRoutes);
app.use('/pages', pagesRoutes);
// app.use("/jobs", jobsRoutes);
app.use('/about-us', employeesRoutes);
app.use('/events', eventsRoutes);
app.use('/courses', coursesRoutes);
app.use('/admin/stories', storiesAdminRoutes);
app.use('/admin/courses', coursesAdminRoutes);
app.use('/admin/pages', pagesAdminRoutes);
// app.use("/admin/jobs", jobsAdminRoutes);
app.use('/admin/partners', partnersAdminRoutes);
app.use('/admin/employees', employeesAdminRoutes);
app.use('/admin/locations', locationsAdminRoutes);
app.use('/admin/events', eventsAdminRoutes);
app.use('/admin/menulocations', menulocationAdminRoutes);
app.use('/admin/contacts', contactsAdminRoutes);
app.use('/admin/settings', settingsAdminRoutes);
app.use('/admin/users', usersAdminRoutes);
app.use('/admin/redirects', redirectsAdminRoutes);
app.use('/admin*', contactsAdminRoutes);
app.use(redirects);
// app.get('*', function (req, res) {
//   res.redirect('/')
// })
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'pug');
function worker() {
    return __awaiter(this, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, EventsController.fetchevents()];
                case 1:
                    response = _a.sent();
                    console.log('👍 Done! Successfully Fetching data\n');
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log('👎 Error! The Error info is below !!!\n');
                    console.log(e_1);
                    process.exit();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// scheduling cron job:
if (process.env.CRONINTERVAL) {
    console.log("Cron scheduled for " + process.env.CRONINTERVAL);
    cron.schedule(process.env.CRONINTERVAL, function () {
        console.log(new Date() + " Started Cronjobs");
        worker();
    }, {
        scheduled: true,
        timezone: 'Europe/Berlin'
    });
}
else {
    console.log('No cron interval set in the .env. No cron started.');
}
worker();
module.exports = app;
