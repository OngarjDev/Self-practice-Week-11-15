const SELECTORS = {
  fullName: '.ecors-fullname',
  signOutButton: '.ecors-button-signout',
  planDropdown: '.ecors-dropdown-plan',
  declareButton: '.ecors-button-declare',
  declaredStatus: '.ecors-declared-plan',
  dialog: '.ecors-dialog',
  dialogMessage: '.ecors-dialog-message',
  dialogOkButton: '.ecors-button-dialog',
}


export function $(selector){
    return document.querySelector(selector);
}

import.meta.env.VITE_APP_URL