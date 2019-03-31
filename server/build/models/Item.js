'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var itemSchema = new Schema({
  name: String,
  price: Number,
  image: String
});

exports.default = _mongoose2.default.model('Item', itemSchema);
//# sourceMappingURL=Item.js.map