const flightsController = require('../controllers').flights;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Flights API!',
  }));

   app.post('/api/flights', flightsController.create);
   app.get('/api/flights', flightsController.list);
   app.post('/api/users', usersController.create);
   app.get('/api/users', usersController.list);
  // app.get('/api/flights/:todoId', flightsController.retrieve);
  // app.put('/api/flights/:todoId', flightsController.update);
  // app.delete('/api/flights/:todoId', flightsController.destroy);
};
