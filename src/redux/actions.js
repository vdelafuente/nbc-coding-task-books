import * as actionTypes from './action-types';
import _ from 'lodash';

const actions = actionTypes.reduce((prev, curr) => ({
  ...prev,
  [_.capitalize(curr)]: () => ({
    type: curr
  }),
}), {});

export {
  actions
}
