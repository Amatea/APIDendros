var express = require('express');
var Noticia = require('../../dbconnection/amateawebDB/noticiasdb');

var noticiawebrouter = express.Router();

noticiawebrouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

noticiawebrouter.route('/noticia')
  .get(function(req, res) {
    Noticia.find(function(err, user) {
      if (err) {
        return res.send(err);
      }
        res.json(user);
    });
});

noticiawebrouter.route('/noticia')
  .post(function(req, res) {
  var user = new Noticia(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'user Added' });
  });
});

noticiawebrouter.route('/noticia')
  .get(function(req, res) {
    Noticia.find(function(err, user) {
      if (err) {
        return res.send(err);
      }
      res.json(user);
    });
  })

  .post(function(req, res) {
    var user = new Noticia(req.body);

    user.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'user Added' });
    });
  });

noticiawebrouter.route('/noticia/:id')
  .put(function(req,res){
     Noticia.findOne({ _id: req.params.id }, function(err, user) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          user[prop] = req.body[prop];
        }
    // save the movie
        user.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'user updated!' });
    });
  });
});

noticiawebrouter.route('/noticia/:id')
    .get(function(req, res) {
      Noticia.findOne({ _id: req.params.id}, function(err, user) {
        if (err) {
          return res.send(err);
        }
        res.json(user);
  });
});

noticiawebrouter.route('/noticia/:id')
    .delete(function(req, res) {
      Noticia.remove({
        _id: req.params.id
      }, function(err, user) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = noticiawebrouter;