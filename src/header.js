import React from 'react';
import "./css/header.css";
import pencil from "./img/makeQ.png";
import menu_q from "./img/menu_q.png";

function header() {
    return (
        <div className="header">
      <span className="title">가치풀자</span>
      <div className="menu">
        <div className="login">
          <span className="login__text">로그인</span>
          <div className="bar"></div>
          <span className="join__text">회원가입</span>
        </div>
        <button className="makeQ">
          <img src={pencil} className="button__img"></img>
          <span className="button__text">문제 생성하기</span>
        </button>
        </div>
    </div>
    );
}
export default header;