import FormView from './views/FormView.js'

import MainController from './controllers/MainController.js'

document.addEventListener('DOMContentLoaded', () => {
  MainController.init();
  FormView.setup(document.querySelector('form'))
});