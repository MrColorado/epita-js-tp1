/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState, setState } from '../store'

const remove = (element) => {
  const currentState = getState();
  const position = currentState.indexOf(element);
  if (position !== -1) {
    currentState.splice(position, 1);
    setState(currentState);
  }
};

export default remove;
