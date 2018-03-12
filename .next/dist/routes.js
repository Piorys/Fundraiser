'use strict';

var routes = require('next-routes')();

routes.add('/fundraisers/new', '/fundraisers/new');

routes.add('/fundraisers/:address/requests', '/fundraisers/requests/index');

routes.add('/fundraisers/:address/requests/new', '/fundraisers/requests/new');

//General rule, anything other add above this
routes.add('/fundraisers/:address', '/fundraisers/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUFPLEFBQVAsSUFDRSxBQURGLG9CQUVFLEFBRkY7O0FBS0EsT0FBTyxBQUFQLElBQ0UsQUFERixrQ0FFRSxBQUZGOztBQUtBLE9BQU8sQUFBUCxJQUNFLEFBREYsc0NBRUUsQUFGRjs7QUFLQTtBQUNBLE9BQU8sQUFBUCxJQUNFLEFBREYseUJBRUUsQUFGRjs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3Bpb3RyLnJ5c3pld3NraS9Eb2N1bWVudHMvUHJvamVjdHMvRnVuZHJhaXNlciJ9