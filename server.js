var path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
//set up handelbars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// app.use(express.static('public'));
app.use(session(sess));
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(routes);
// const notesPath = path.join(__dirname, 'views/layout/homepage.html');
//Get requests to show html content when user visits a page and if no matching route is found
// app.get('/dashboard', (req, res) => {
//   //make sure data passed in an obj
//   var obj = { name: 'hi' };
//   console.log(obj);
//   res.render('dashboard', obj);
//   res.sendFile(notesPath);
// });
// console.log// the obj so you can see what it looks like passing to the frontend
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
