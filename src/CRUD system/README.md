# CRUD system by react

- 클래스 컴포넌트를 활용하여 CRUD 시스템 페이지를 제작하여 학습한 디렉토리입니다.

## 코드 설명

### 1. 클래스 컴포넌트

```jsx
import React, { Component } from 'react';
//
class App extends Component {
  render() {
    return (
      <header>
        <h1>Hello There!</h1>
      </header>;
    )
  }
}
```

- 리액트가 갖고 있는 `Component`라는 클래스를 상속해서 새로운 `APP`클래스를 만든다.
- 그 클래스는 `render`라는 메서드를 갖고 있다.
- `import`한 `'react'`는 현재 17.0.2버전의 `react`를 말한다.
- react 17버전 부터는 `import React from "react"`를 생략하기 때문에 이후의 코드는 생략한다.

### 2. `constructor()`

```js
constructor(props) {
  super(props);
  // 여기서 this.setState()를 호출하면 안 됩니다!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
- React에서 생성자는 보통 아래의 두 가지 목적을 위하여 사용됩니다.

1. `this.state`에 객체를 할당하여 지역 **state를 초기화**
2. 인스턴스에 이벤트 처리 메서드를 바인딩
- 생성자는 `this.state`를 직접 할당할 수 있는 유일한 곳입니다.
-  그 외의 메서드에서는 `this.setState()`를 사용해야 합니다.

### 3. 클래스 컴포넌트에서 이벤트로 state 변경하기

```js
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    return (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          활성화 버튼
        </button>
    )
  }
}
```
- 이벤트 핸들러에 `.bind(this)`를 추가하여 핸들러 안의 `this`가 클래스 컴포넌트를 바라보게 하기
  - 이벤트 핸들러 함수의 `this`는 `undefined`를 가리킨다.
  - `render` 함수 내에서의 `this`는 컴포넌트를 가리킨다.
- `this.setstate({key:value})` 함수를 이용하여 state 값 변경하기



## 시행착오

### 1. `<li>` 태그 랜더링

```js
return {<li></li>}
```
- `{}`로 감싼 html태그도 DOM요소로 변환된다.

```js
return {[<textarea></textarea>, <textarea></textarea>, <textarea></textarea>]}
```
- 배열 형태로 반환해도, 배열의 모든 요소가 DOM요소로 변환된다.

```js
return(
  <ul>
  {props.forEach((prop) => (
    <li>
      {prop[0]} : {prop[1]}
    </li>
  ))}
  </ul>
)
```
- `forEach`문에서 `<li>`태그를 반환하면 알아서 랜더링 되는줄 알았다.😪
- 하지만 이는 `{}`안의 자바스크립트 코드일 뿐이였다.
- `<li>`태그들을 랜더링하기 위해선, map함수로 태그를 담은 배열을 리턴해야됐다.
**- 배열 형태로 반환해도, 배열의 모든 요소가 DOM요소로 랜더링된다.**
