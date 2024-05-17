import express from 'express';
import Routes from './routes.js';
import session from 'express-session';
import path from 'path'
import { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const app = express();
const routes = new Routes();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(morgan('dev'));
app.use('/res',express.static(__dirname + '/res/'));
//app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Main page
app.get('/', (req, res) => routes.index(req, res));

// Change the active theme
app.get('/themes/:theme/:file', (req, res) => routes.themes(req, res));
//app.use(express.favicon());

// For demo purpose, anyone can change the theme
app.get('/settheme/:theme', (req, res) => routes.setTheme(req, res));

// Show the register form
app.get('/register', (req, res) => routes.registerForm(req, res));

// Process the register form
app.post('/register', (req, res) => routes.registerUser(req, res));

// Process login form
app.post('/login', (req, res) => routes.loginUser(req, res));
//app.get('/login', (req, res) => routes.loginUser(req, res));

// Process logoff request
app.get('/logoff', (req, res) => routes.logoffUser(req, res));

// Show a list of users
app.get('/people', (req, res) => routes.listUsers(req, res));

// Show individual profile for now routes to people list
app.get('/profile', (req, res) => routes.listUsers(req, res));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
