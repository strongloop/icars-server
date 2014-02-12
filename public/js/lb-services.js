'use strict';

var urlBase = "/api";

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `credentials` – `{object}` - 
         *
         * - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "login": {
          url: urlBase + "/users/login",
          method: "POST",
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.accessTokenId = accessToken.id;
              return response.resource;
            }
          }

        },
        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "logout": {
          url: urlBase + "/users/logout",
          method: "POST",
          interceptor: {
            response: function(response) {
              LoopBackAuth.accessTokenId = null;
              return response.resource;
            }
          }

        },
        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `uid` – `{string}` - 
         *
         * - `token` – `{string}` - 
         *
         * - `redirect` – `{string}` - 
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#email
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "email": {
          url: urlBase + "/users/Emails",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#accessToken
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "accessToken": {
          url: urlBase + "/users/AccessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/users",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/users",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/users",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - 
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__get__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes accessTokens
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/accessTokens/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/accessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/accessTokens",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/accessTokens",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/accessTokens/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/accessTokens/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/accessTokens",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/accessTokens/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/accessTokens/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/accessTokens/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Application
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Application` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Application",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/applications/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Application#create
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/applications",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#updateOrCreate
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/applications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#upsert
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/applications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#exists
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/applications/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#findById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/applications/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#find
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/applications",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#findOne
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/applications/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#destroyById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#deleteById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#removeById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#count
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/applications/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#prototype$updateAttributes
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/applications/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Push
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Push` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Push",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/push/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Push#notifyByQuery
         * @methodOf lbServices.Push
         *
         * @description
         *
         * Send a push notification by installation query
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `deviceQuery` – `{object=}` - Installation query
         *
         * - `notification` – `{object=}` - Notification
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "notifyByQuery": {
          url: urlBase + "/push",
          method: "POST",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Installation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Installation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Installation",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/installations/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Installation#findByApp
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by application id
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `appId` – `{string=}` - Application id
         *
         * - `appVersion` – `{string=}` - Application version
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findByApp": {
          url: urlBase + "/installations/byApp",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findByUser
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by user id
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `userId` – `{string=}` - User id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findByUser": {
          url: urlBase + "/installations/byUser",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findBySubscriptions
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by subscriptions
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `subscriptions` – `{string=}` - Subscriptions
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findBySubscriptions": {
          url: urlBase + "/installations/bySubscriptions",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#create
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/installations",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#updateOrCreate
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/installations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#upsert
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/installations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#exists
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/installations/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/installations/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#find
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/installations",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findOne
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/installations/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#destroyById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#deleteById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#removeById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#count
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/installations/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#prototype$updateAttributes
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/installations/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Notification
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Notification` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Notification",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/notifications/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Notification#create
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/notifications",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#updateOrCreate
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/notifications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#upsert
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/notifications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#exists
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/notifications/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#findById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/notifications/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#find
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/notifications",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#findOne
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/notifications/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#destroyById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#deleteById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#removeById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#count
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/notifications/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#prototype$updateAttributes
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/notifications/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Dealer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dealer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Dealer",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/dealers/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Dealer#create
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/dealers",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#updateOrCreate
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/dealers",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#upsert
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/dealers",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#exists
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/dealers/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#findById
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/dealers/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#find
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/dealers",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#findOne
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/dealers/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#destroyById
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/dealers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#deleteById
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/dealers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#removeById
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/dealers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#count
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/dealers/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$updateAttributes
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/dealers/:id",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__get__reservations
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Fetches reservations
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - 
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__get__reservations": {
          url: urlBase + "/dealers/:id/reservations",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__create__reservations
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Creates reservations
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__create__reservations": {
          url: urlBase + "/dealers/:id/reservations",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__delete__reservations
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Deletes reservations
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__delete__reservations": {
          url: urlBase + "/dealers/:id/reservations",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__get__rates
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Fetches rates
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - 
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__get__rates": {
          url: urlBase + "/dealers/:id/rates",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__create__rates
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Creates rates
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__create__rates": {
          url: urlBase + "/dealers/:id/rates",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dealer#prototype$__delete__rates
         * @methodOf lbServices.Dealer
         *
         * @description
         *
         * Deletes rates
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__delete__rates": {
          url: urlBase + "/dealers/:id/rates",
          method: "DELETE",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Car
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Car` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Car",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/cars/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Car#create
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/cars",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#updateOrCreate
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/cars",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#upsert
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/cars",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#exists
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/cars/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#findById
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/cars/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#find
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/cars",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#findOne
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/cars/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#destroyById
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/cars/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#deleteById
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/cars/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#removeById
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/cars/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#count
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/cars/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#prototype$updateAttributes
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/cars/:id",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#prototype$__get__reservations
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Fetches reservations
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - 
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__get__reservations": {
          url: urlBase + "/cars/:id/reservations",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#prototype$__create__reservations
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Creates reservations
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__create__reservations": {
          url: urlBase + "/cars/:id/reservations",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Car#prototype$__delete__reservations
         * @methodOf lbServices.Car
         *
         * @description
         *
         * Deletes reservations
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__delete__reservations": {
          url: urlBase + "/cars/:id/reservations",
          method: "DELETE",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Reservation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reservation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reservation",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/reservations/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Reservation#create
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/reservations",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#updateOrCreate
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/reservations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#upsert
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/reservations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#exists
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/reservations/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#findById
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/reservations/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#find
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/reservations",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#findOne
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/reservations/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#destroyById
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/reservations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#deleteById
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/reservations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#removeById
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/reservations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#count
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reservations/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Reservation#prototype$updateAttributes
         * @methodOf lbServices.Reservation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reservations/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rate",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rates/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rate#create
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rates",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#updateOrCreate
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#upsert
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#exists
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rates/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#findById
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rates/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#find
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rates",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#findOne
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rates/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#destroyById
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#deleteById
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#removeById
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#count
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rates/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rate#prototype$updateAttributes
         * @methodOf lbServices.Rate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rates/:id",
          method: "PUT",

        },
      }
    );
  }]);


module
  .factory('LoopBackAuth', function() {
    return {
      accessTokenId: null
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  })
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          if (LoopBackAuth.accessTokenId) {
            config.headers.authorization = LoopBackAuth.accessTokenId;
          }
          return config || $q.when(config);
        }
      }
    }])
  .factory('LoopBackResource', [ '$resource', function($resource) {
    return function(url, params, actions) {
      var resource = $resource(url, params, actions);

      // Angular always calls POST on $save()
      // This hack is based on
      // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
      resource.prototype.$save = function(success, error) {
        // Fortunately, LoopBack provides a convenient `upsert` method
        // that exactly fits our needs.
        var result = resource.upsert.call(this, {}, this, success, error);
        return result.$promise || result;
      }

      return resource;
    };
  }]);
