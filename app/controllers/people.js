var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/people', router);
};

router.get('/', function (req, res, next) {
  db.People.findAll({order: '"updatedAt" DESC'}).then(function (people) {
    res.render('people', {
      title: 'People List',
      people: people
    });
  });
});

router.post("/", function(req, res, next) {
  db.People.create({
    name: req.body.name
  });
  res.redirect("back");
});

router.put("/:id", function(req, res, next) {
  const id = req.params.id;
  db.People.findById(id).then(item=>{
    item.update({name: req.body.name})
  });
  res.status(200).end();
});

router.delete("/:id", function(req, res, next) {
  const id = req.params.id;
  db.People.findById(id).then(item=>{
    item.destroy();
  });
  res.end();
});

