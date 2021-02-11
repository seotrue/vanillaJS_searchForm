# vanillaJS_searchForm
- 바닐라 자바스크립트로 검색 폼 구현하기

### MVC패턴으로 구현
 #### MODEL
 - 데이터를 관리하는 역활
 - DB 에서 아웃풋
 - 입력값을 DB에 인풋
 - 데이터 베이스에 직접 접근 하지 않구 API를 통해 접근
 
 #### VIEW
 - 모델의 데이터를 화면을 그린다.
 - 사용자의 입력한 데이터를 입력이벤트를 받아서 다른 객체에게 전달
 - 화면을 관리
 
 #### CONTRILLER
 - 모델로부터 데이터를 가져오고 그데이터를 뷰에게 전달
 - 뷰에서 입력받은 데이터를 모델에게 전달
 - 모델과 뷰를 관리
 
 ### 구조화 
 #### 프로젝트 내에서의 VIEW
- FormView : 이벤트 핸들러, UI핸들러 등 표현 / 검색결과를 formView에서 보여주지 않아두 됨 : 엔터키가 쳐쳣다는 이벤트를 메
인컨트롤레에게 전달 그리고 메인컨트롤러는 resultView에거 전달해서 거기서 검색 결과를 보여주면 돔
(컨트롤러에게 위임)
  #### 프로젝트 내에서의 CONTRILLER
- MainController
- 체이닝을 이용할려면 해당 객체엣 this를 리턴하는 지 확인(쓸려면 FormView의 init 함수에서 this를 리턴하는 지 확인)
```
FormView.setup(document.querySelector('form'))
  .on('@submit',e => this.onSubmit(e.detail.input))
  .on('@reset',e => this.onResetForm())
```

### 기능 
1. 검색폼 구현

  미리 자주 쓰는 함수를 등록해서 View.js에 선언
  예) on 함수 이벤트와 핸드러를 인자로 받아서, 구분한다.  
  액션은 다르지만 (리셋버튼 클릭, 검색어의 길이가 0 일때 onReseForm 함수가 작동)  
  on의 이벤트로 @reset 이라는 인자로 같은 함수가 호출되도록 작동
  FormView에서 실행되는 것인지 확인을 하구 아니면 MainController에게 위임한다. 이런 이벤트를 받앗다구 알려준다 메인컨트롤러에게

2. 추천 검색과 검색기록 

### 프로젝트 흐름 
view에서 이벤트 리스너, 돔그리고 =>
[구체화]
해당 view에서 바인드 이벤트를 넣어준다.
해당 이벤트에 대한 액션을 넣어준다.
MainController에게 전달.

controller는 view 에서 위임받은 애들을 실행 및 데이터가 필요한 애들은 모델에서 요구 
데이터 받구 해당 데이터 view 에게 전달


### 프로젝트 작업하면서 알아볼 것 
- 화살표함수의 this 파악
- [OLOO 패턴](https://baeharam.netlify.app/posts/javascript/JS-OLOO%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4)
- reduce 의 두번째 인자 
- 콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다. initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.
- debugger
