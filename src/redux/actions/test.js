/**
 * Creator: Tang Xiaoji
 * Time: 2017-11-15
 */

'use strict';

import { Actions } from '../actions';

function increase() {
  return (dispatch) => {
    dispatch({
      type: Actions.Increase
    });
  };
}

function decrease() {
  return (dispatch) => {
    dispatch({
      type: Actions.Decrease
    });
  };
}

export const test = {
  increase,
  decrease
};
