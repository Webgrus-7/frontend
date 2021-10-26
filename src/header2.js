import "./css/header2.css";
import menu_q from "./img/menu_q.png";

function header2() {
  return (
    <div className="login__outer">
      <div className="menu">
        <span className="feed__text-01">피드</span>
        <img src={menu_q} className="q"></img>
        <span className="feed__text-02">내 피드</span>
      </div>
    </div>
  );
}
export default header2;