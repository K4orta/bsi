var App = require('./components/app.react');
import L from 'leaflet';

require('6to5/runtime');
import '6to5/polyfill';

/*
 * Superagent promisification
 */
import { Request } from 'superagent';

Request.prototype.exec = function() {
  let req = this;

  return new Promise ((resolve, reject) => {
    req.end((error, res) => {
      if (error) return reject(error);
      resolve(res);
    });
  });
};

App(L);