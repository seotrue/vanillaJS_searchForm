import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click',e => this.onClickReset())
};

FormView.onKeyup = function (e) {
  const enter = 13;
  this.showResetBtn(this.inputEl.value.length);
  if (!this.inputEl.value.length) this.emit('@reset');
  if (e.keyCode !== enter) return;
  this.emit('@submit',{ input: this.inputEl.value });
  this.emit('@reset',{ input: this.inputEl.value })
};

// todo : x버튼을 클릭하거나,
//  검색어를 삭제하면 검색 결과를 삭제한다. (MaimController에게 위임)
/*
* MainController에게 클릭 이벤트를 전달한다 -> mainController에서 받는다...  단순히 그것만?
*
* */
FormView.onClickReset = function () {
  this.emit('@reset')
  this.showResetBtn(false)
};

export default FormView