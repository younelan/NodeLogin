import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import mount from 'koa-mount';
import serve from 'koa-static';
//const mount = require('koa-mount');

import path from 'path';
import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import Routes from './routes.js';
import bcrypt from 'bcrypt';
import logger from 'koa-logger';

const app = new Koa();
const router = new Router();
const routes = new Routes();


const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Serve static files from the 'res' directory

console.log(path.join(__dirname, 'res/'));

//app.use(mount(path.join(__dirname, 'res/')));
app.use(mount('/res', serve(path.join(__dirname, 'res'))));

app.keys = ['your-secret-key'];
app.use(session(app));
app.use(logger());
app.use(bodyParser());

// Passport configuration
passport.use(new LocalStrategy(async (username, password, done) => {
const user = await routes.findUser(username);
if (!user) {
return done(null, false, { message: 'Incorrect username.' });
}
const isValid = await bcrypt.compare(password, user.password);
if (!isValid) {
return done(null, false, { message: 'Incorrect password.' });
}
return done(null, user);
}));

passport.serializeUser((user, done) => {
done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
const user = await routes.findUser(username);
done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// Routes
router.get('/favicon.ico', (ctx) => {
ctx.status = 204;
});

router.get('/', async (ctx) => {
  console.log("hi world")
await routes.index(ctx);
});

// Serve static files from the 'themes' directory
router.get('/themes/:theme/:file', async (ctx) => {
  await routes.themes(ctx);
  });

router.get('/settheme/:theme', async (ctx) => {
await routes.setTheme(ctx);
});

router.get('/register', async (ctx) => {
await routes.registerForm(ctx);
});

router.post('/register', async (ctx) => {
await routes.registerUser(ctx);
});

router.post('/login', async (ctx, next) => {
return passport.authenticate('local', (err, user, info) => {
if (user) {
ctx.login(user);
ctx.redirect('/protected');
} else {
ctx.status = 401;
ctx.body = info.message;
}
})(ctx, next);
});

router.get('/logoff', (ctx) => {
ctx.logout();
ctx.body = 'Logged out';
});

router.get('/people', async (ctx) => {
await routes.listUsers(ctx);
});

router.get('/profile', async (ctx) => {
await routes.listUsers(ctx);
});

app.use(router.routes()).use(router.allowedMethods());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});