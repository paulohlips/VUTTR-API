"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _ToolController = require('./app/controllers/ToolController'); var _ToolController2 = _interopRequireDefault(_ToolController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/middleware/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.get("/users", _UserController2.default.index);
routes.post("/users", _UserController2.default.store);

routes.get("/tools", _ToolController2.default.index);
routes.post("/tools", _ToolController2.default.store);

routes.post("/session", _SessionController2.default.store);

routes.use(_auth2.default);

routes.put("/users/:id", _UserController2.default.update);
routes.delete("/users/:id", _UserController2.default.delete);

routes.put("/tools/:id", _ToolController2.default.update);
routes.delete("/tools/:id", _ToolController2.default.delete);

exports. default = routes;
