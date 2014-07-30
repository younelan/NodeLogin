 // YAN - Yet another network using node.js
/**this is app.js, the main source file
*/


/**
 * Module dependencies.
 */

//include express engine
var express = require('express')
  , routes = require('./routes.js') //routes we send pages to
  , http = require('http');


var app = express();
  app.set('view engine', 'ejs'); 
  //store session in memory
var MemoryStore = express.session.MemoryStore;

/**
 * Set express options.
 */
 app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.use(express.favicon());
  //enable logging
  app.use(express.logger('dev'));
  //enable sessions
 app.use(express.cookieParser());
  app.use(express.session({ secret: "woohoo sessions", store: new MemoryStore({ reapInterval: 60000 * 10 }) }));
  //enable body parser (get/post requests)
  app.use(express.bodyParser()); 
  app.use(express.methodOverride());
  //enable routing of requests
  app.use(app.router);
  //serve a static directory
  app.use('/res',express.static(__dirname + '/res/'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/* 
   list of active routes 
*/

//main page
app.get('/', routes.index);
//change the active theme
app.get('/styles/:theme/:file', routes.styles);
//for demo purpose, anyone can change the theme
app.get('/settheme/:theme', routes.setTheme);
//show the register form
app.get('/register',routes.registerForm);
//process the register form
app.post('/register',routes.registerUser);
//process login form
app.post('/login',routes.loginUser);
//process logoff request
app.get('/logoff',routes.logoffUser);
//show a list of users
app.get('/people',routes.listUsers);
//show individual profile for now routes to people list
app.get('/profile',routes.listUsers);

/* 
   activate web server 
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
