/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// !toast.js

/**
 * Initiates a new toast
 * @param {qS} qS
 * @param {boolean} autohide - if to autohide toast
 * @param {Element} [elem]
 * @return {toast}
 */
const newToast = (qS, autohide = true, elem = selElem(qS)) =>
  new bootstrap.Toast(elem, {autohide});

/**
 * Shows toast as well as set message
 * @param {toast} toast
 * @param {string} [message]
 * @param {Element} [tElem]
 */
const showToast = (
    toast,
    message,
    tElem = selElem('.toast-body', toast._element),
) => {
  if (message) tElem.innerHTML = message;

  toast.show();
};

/**
 * Hides a toast
 * @param {toast} toast
 */
const hideToast = (toast) => {
  toast.hide();
};
