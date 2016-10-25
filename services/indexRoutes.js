var index = require('./controllers/indexController');
var passport = require('passport');

module.exports = function(app) {
    
    app.get('/', index.render);

    app.route('/signin')
     .get(index.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/'
     }));
    
    app.get('/signout', index.signout);
};
