import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    // todo: x버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다.
    ResultView.hide()
  },

  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSearchResult(data) {
    ResultView.render(data)
  }
}