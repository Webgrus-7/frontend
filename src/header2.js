import "./css/header2.css";
import menu_q from "./img/menu_q.png";
import { Link } from "react-router-dom";

function header2() {
  return (
    <div className="login__outer">
      <div className="menu">
        <span className="feed__text-01">피드</span>
        <img src={menu_q} className="q"></img>
        <Link to="/feed1">
        <span className="feed__text-02">내 피드</span>
        </Link>
      </div>
    </div>
  );
}
export default header2;