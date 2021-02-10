const tag = '[View]'
/*
  // 공통으로 사용하는 기능들
*/

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  // view에서 나오는 이벤트를 어떻게 핸들러 할것인가 위해 사용
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  // 스스로 이벤트를 방출
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}