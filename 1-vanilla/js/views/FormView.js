import View from "./View.js";

const tag = '[FormView]';

const FormView = Object.create(View);

FormView.setup = function (el) {
    this.init(el);  // this.el = el
    console.log(el,'잘받앗는디')
    this.inputEl = el.querySelector('[type=text]');
    this.resetEl = el.querySelector('[type=reset]');
    console.log(this.resetEl,'resetEl')
    this.showResetBtn(false);

};

FormView.showResetBtn = function (show = true) {
    console.log(this,'this')
    this.resetEl.style.display = show ? 'block' : 'none';
};

export default FormView