import React from 'react';
import "./css/header.css";
import pencil from "./img/makeQ.png";

function header() {
    return (
        <div className="header">
            <span className="title">web test</span>
            <span className="login__text">로그인</span>
            <div className="bar"></div>
            <span className="join__text">회원가입</span>
            <div className="button">
                <img src={pencil} className="button__img"></img>
                <span className="button__text">문제 생성하기</span>
            </div>
        </div>
    );
}
export default header;