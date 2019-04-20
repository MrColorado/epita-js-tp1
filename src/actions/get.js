/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState } from '../store'

const get = (element) => {
  const state = getState();
  const position = state.indexOf(element);
  return position !== -1 ? state[position] : null
};

export default get;
