/* eslint-disable no-unused-vars */
// !utils.js

/**
 * Selects a DOM element
 * @param {qS} qS
 * @param {Document | Element} parElem - the parent DOM element to reference
 * @return {Element} - a selected DOM element
 */
const selElem = (qS, parElem = document) => parElem.querySelector(qS);
