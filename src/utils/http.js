/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

import request from 'superagent';

class Http {
  constructor() {}

  async get(url, onSuccess, onFailed) {
    console.log('Get ' + url + ' started.');
    request
      .get(url)
      .end((err, res) => {
        if(err) {
          onFailed && onFailed(err);
        } else {
          onSuccess && onSuccess(res)
        }
      });
  }

  async post(url, params, onSuccess, onFailed) {
    console.log('Post ' + url + ' started.');
    request
      .post(url)
      .send(params) // sends a JSON post body
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if(err) {
          onFailed && onFailed();
        } else {
          onSuccess && onSuccess();
        }
      });
  }
}

export const http = new Http();
