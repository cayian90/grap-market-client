import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer";

function App() {
  // jsx 문법 : 변수를 쓸수 있다
  const text = "화이팅!!";

  // jsx 문법 함수를 만들수 있다.
  const sayHello = function () {
    return <h3>인프런 강의 쓰</h3>;
  };

  const sayHello2 = function () {
    alert("안녕 나는 그랩이야");
  };

  return (
    <div>
      <h1>안녕하세요!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>
        <h3>클릭해보세요</h3>
      </div>

      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="승현" age={17} />
      <ChildComponent name="석현" age={13} />

      <TimerComponent />
    </div>
  );
}

export default App;
