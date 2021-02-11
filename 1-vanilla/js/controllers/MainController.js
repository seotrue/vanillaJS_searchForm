import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from "../views/TabView.js";
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm());

    TabView.setup(document.querySelector('#tabs'));
    ResultView.setup(document.querySelector('#search-result'))

    this.selectTab = '추천 검색어';
    this.renderView();
  },

  // View를 그려주는것이 많기때문에 랜더 함수를 뺀다.
  renderView() {
    console.log(tag,'renderView()');
    TabView.setActiveTab(this.selectTab);
    ResultView.hide();
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResultView.hide()
  },

  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSearchResult(data) {
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

}