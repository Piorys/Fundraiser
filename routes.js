const routes = require('next-routes')();


routes.add(
  '/fundraisers/new',
  '/fundraisers/new'
);

routes.add(
  '/fundraisers/:address/requests',
  '/fundraisers/requests/index'
);

routes.add(
  '/fundraisers/:address/requests/new',
  '/fundraisers/requests/new'
);

//General rule, anything other add above this
routes.add(
  '/fundraisers/:address',
  '/fundraisers/show'
);


module.exports = routes;
