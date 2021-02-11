import View from "./View.js";

const tag = '[KeywordView]';

const KeywordView = Object.create(View);

KeywordView.setup = function (el) {
    this.init(el)
    return this;
};

KeywordView.message = {
    NO_KEYWORDS: '추천 검색어가 없습니다.'
}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data): this.message.NO_KEYWORDS;
    // DOM에 그려진 다음에 이벤트리스너 붙이기
    this.bindEvents();
    this.show()
};

KeywordView.getKeywordsHtml = function (data){
    return data.reduce((html,item,index) => {
        html += `
            <li data-keyword="${item.keyword}">
                <span class="''number">${index+1}</span>
                ${item.keyword}
            </li>
        `
        return html
    },'<ul class="list">') + '</ul>'
};

KeywordView.bindEvents = function () {
  // 이벤트를 붙여준다
    Array.from(this.el.querySelectorAll('li')).forEach(li =>{
        li.addEventListener('click', e => this.onClickKeyword(e))
    })

};

KeywordView.onClickKeyword = function (e) {
    const { keyword } = e.currentTarget.dataset;
    console.log(tag,'onClickKeyword()' , e);

    this.emit('@click',{ keyword })

};

export default KeywordView