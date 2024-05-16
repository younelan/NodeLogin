const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.get('/', routes.index);
app.get('/styles/:theme/:file', routes.styles);
app.get('/settheme/:theme', routes.setTheme);
app.get('/register', routes.registerForm);
app.post('/register', routes.registerUser);
app.post('/login', routes.loginUser);
app.get('/logoff', routes.logoffUser);
app.get('/people', routes.listUsers);
app.get('/profile', routes.listUsers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
