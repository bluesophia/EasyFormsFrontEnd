var express = require('express');
var router = express.Router();
// const reactExpressMiddleware = require('react-express-middleware')
// const ReactComponent = require('./component.jsx')

router.get('/message', function(req, res, next) {
  res.json('Welcome To React');
});

// router.all('/about', function(req, res, next) {
//   res.sendFile('build/index.html', { root: global });
// });


router.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

module.exports = router;
