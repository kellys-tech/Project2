const express = require('express');
// const session = require('express-session');
// const routes = require('./controllers');
const exphbs = require('express-handlebars');
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// var path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
app.use(express.static('public'));
// app.use(session(sess));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// const notesPath = path.join(__dirname, 'views/layout/homepage.html');



//Get requests to show html content when user visits a page and if no matching route is found

app.get('/dashboard', (req, res) => {
  //make sure data passed in an obj
  //console.log the obj so you can see what it looks like passing to the frontend
  var obj={name:'hi'};
  console.log(obj);
  res.render('dashboard', obj);
  //res.sendFile(notesPath);
});



//app.use(routes);

// sequelize.sync({
//   force: false
// }).then(() => {
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
// });