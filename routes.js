const routes = require('next-routes')();


routes.add(
  '/fundraisers/new',
  '/fundraisers/new'
);

//General rule, anything other add above this
routes.add(
  '/fundraisers/:address',
  '/fundraisers/show'
);


module.exports = routes;
