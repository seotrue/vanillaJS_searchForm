import View from './View.js'

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.tabNames = {
  recommand: '추천 검색어',
  recent: '최근 검색어',
};

TabView.setup = function (el) {
  this.init(el);
  this.tabEl = this.el.querySelectorAll('li');
  this.bindClick();
  return this
};

// TabView.bindEvents = function () {
//  //  this.resetEl.addEventListener('click', e => this.onClickReset())
//   // 같은 클래스 명을 가진 애들을 querySelectorAll 로 배열로 담으면 이벤트 핸들러는 어케 할것인가..
//   this.tabEl.addEventListener('click',e => this.onClickTab(e))
// };

TabView.bindClick = function () {
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.addEventListener('click', e => this.onClick(li.innerHTML))
  })
};

TabView.onClick = function (tabName) {
  this.setActiveTab(tabName);
  // MainController 에게두 알려줌
  this.emit('@change',{tabName})
}

// TabView.onClickTab = function (e) {
//   //this.emit('@submit', { input: this.inputEl.value })
//   // 어떤 탭을 클릭햇는지
//
//   this.emit('@click', {target: e.target})
// }

TabView.setActiveTab = function (tabName) {
  Array.from(this.el.children).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  });
  this.show()
};

export default TabView
