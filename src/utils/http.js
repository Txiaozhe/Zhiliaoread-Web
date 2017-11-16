/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-16
 */

class Http {
  constructor() {}

  async get(url) {
    console.log('Get ' + url + ' started.');

    try {
      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
      });

      return await resp.json();
    } catch (error) {
      throw error
    }
  }

  async post(url, params) {
    console.log('Post ' + url + ' started.');

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(params)
      });

      return await resp.json();
    } catch (error) {
      throw error;
    }
  }
}

export const http = new Http();
