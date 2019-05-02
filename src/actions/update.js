/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import { getState, setState } from '../store'

const update = (element, newElement, dom) => {
  const state = getState();
  const position = state.indexOf(element);
  if (position !== -1) {
    state[position] = newElement;
    setState(state);
    dom.parentNode.firstElementChild.setAttribute("src", newElement);
  }
};

export default update;
