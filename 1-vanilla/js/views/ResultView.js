import View from './View.js'

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el) {
    this.init(el)
}

// 서버에서 받은 데이터로 돔에 그려준다
ResultView.render = function (data) {
    console.log(tag,'render()',data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다.';
};

ResultView.getSearchResultsHtml = function (data) {
    debugger;
};

export default ResultView;