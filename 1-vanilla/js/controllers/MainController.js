import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js';

import SearchModel from "../models/SearchModel.js";
const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm());

    ResultView.setup(document.querySelector('#search-result'));
},

  search(query) {
    console.log(tag, 'search()', query);
    // search api
    SearchModel.list(query).then(data => {
      this.onSearchResult(data); // 서버에서 받은 데이터를 인자로 onSearchResult 호출
    });

  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input);
    this.search(input);
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
  },

  onSearchResult(data) {
    ResultView.render(data);
  }
}