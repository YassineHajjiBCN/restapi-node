const express = require('express');
const App = express();
const morgan = require('morgan');


//Settings
  App.set('port', process.env.Port || 3000);


//Middleware : 
App.use(morgan('dev'));
App.use(express.urlencoded({extended: false}));
App.use(express.json());

//Route
App.use(require('./routes/index.js'));
App.use('/api/teams', require('./routes/teams.js'));

// Starting the server
App.listen(App.get('port'), () => {
  console.log(`server port ${App.get('port')}`);
});