'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _Item = require('./models/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotenv = require('dotenv').config();

var uri = process.env.MONGO_URI;
var PORT = process.env.PORT || 8000;

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)('*'));

_mongoose2.default.connect(uri, { useNewUrlParser: true }, function (err) {
  if (err) throw new Error(err);

  console.log('Connected to the database');
});

app.get('/price/:price', function (req, res) {
  var _price = req.params.price;

  _Item2.default.find({ price: { $lte: _price } }, function (err, list) {
    if (err) throw new Error(err);
    res.send(list);
  });
});

app.post('/create/item', function (req, res) {
  console.log('this ran');
  var _req$body = req.body,
      name = _req$body.name,
      image = _req$body.image,
      price = _req$body.price;

  if (!name || !image || !price) {
    res.status(442).send({ error: 'None of the fields should be null' });
  }

  _Item2.default.findOne({ name: name }, function (err, doc) {
    if (err) {
      throw new Error(err);
    }
    if (doc) {
      return res.status(422).send({ error: 'Name is in use' });
    }

    var Item = new _Item2.default({
      name: name,
      image: image,
      price: price
    });

    Item.save(function (err, doc) {
      if (err) throw new Error(err);

      res.status(200).send({ doc: doc });
    });
  });
});

app.listen(PORT, function () {
  console.log('Server started at port ' + PORT);
});
//# sourceMappingURL=server.js.map