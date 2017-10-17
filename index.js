import _ from 'lodash';

function getRootKey(__, key) {
  return isNaN(key) ? key : `[${key}]`;
}

function getChildKey(prop, key) {
  return isNaN(key) ? `${prop}.${key}` : `${prop}[${key}]`;
}

export function flatten(data, prop) {
  const getKey = prop ? getChildKey : getRootKey;
  return !_.isObject(data)
  ? { [prop]: data }
  : _.reduce(
  data, (result, v, k) => Object.assign({}, result, flatten(data[k], getKey(prop, k))), {}
  );
}

export function unflatten(data) {
  const isArray = /^\[\d]$/.test(_.first(_.keys(data)));
  const seed = isArray ? [] : {};
  return _.reduce(data, (result, prop, key) => _.set(result, key, prop), seed);
}