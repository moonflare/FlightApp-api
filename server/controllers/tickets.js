const {Ticket} = require('../models');

module.exports = {
  create(req, res) {
    return Ticket
      .create({
        price: req.body.price,
        flightIndex: req.body.flightIndex,
      })
      .then((airline) => res.status(201).send(airline))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Ticket
      .all()
      .then(tickets => res.status(200).send(tickets))
      .catch(error => res.status(400).send(error));
  },
};
