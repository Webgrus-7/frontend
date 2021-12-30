import React from "react";
import "./css/search.css";
import searchbttn from "./img/searchbttn.png";

function search() {
  let text_tag = ["#어쩌고 #저쩌고 #어쩌고"];
  return (
    <div className="search">
      <div class="searchengine">
        <input type="text" value="문제를 검색하세요." class="find"></input>
        <img src={searchbttn} class="searchbttn"></img>
      </div>
      <div className="Qlist">
        <div class="boxList">
          <div class="box">
            <div class="box_title">
              1. 토익 추천 문제 토플 추천 문제, 전공 추천문제 <br />
              (2018.08.10)
            </div>
            <div class="box_by">
              by <span class="byname">조예린</span>
            </div>
            <div class="hashtag">{text_tag}</div>
            <div class="info">
              <div class="line1"></div>
              <div class="infoName">
                <span>좋아요</span>
                <span>정답 률</span>
                <span>난이도</span>
              </div>
              <div class="line2"></div>
              <div class="infoData">
                <span>128</span>
                <span>99%</span>
                <span>☆★★★★</span>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box_title">
              2. 토익 추천 문제 토플 추천 문제, 전공 추천문제 모음 문제 모음
              전공 족보 모음 <br />
              (2018.03.10)
            </div>
            <div class="box_by">
              by <span class="byname">조예린</span>
            </div>
            <div class="hashtag">{text_tag}</div>
            <div class="info">
              <div class="line1"></div>
              <div class="infoName">
                <span>좋아요</span>
                <span>정답 률</span>
                <span>난이도</span>
              </div>
              <div class="line2"></div>
              <div class="infoData">
                <span>128</span>
                <span>99%</span>
                <span>☆★★★★</span>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box_title">
              3. 토익 추천 문제 토플 추천 문제, 전공 추천문제 <br />
              (2018.08.10)
            </div>
            <div class="box_by">
              by <span class="byname">djfla</span>
            </div>
            <div class="hashtag">{text_tag}</div>
            <div class="info">
              <div class="line1"></div>
              <div class="infoName">
                <span>좋아요</span>
                <span>정답 률</span>
                <span>난이도</span>
              </div>
              <div class="line2"></div>
              <div class="infoData">
                <span>128</span>
                <span>99%</span>
                <span>☆★★★★</span>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box_title">
              4. 토익 추천 문제 토플 추천 문 제, 전공 추천문제 모음집
              <br />
              (2020.08.20)
            </div>
            <div class="box_by">
              by<span class="byname">김주영</span>
            </div>
            <div class="hashtag">{text_tag}</div>
            <div class="info">
              <div class="line1"></div>
              <div class="infoName">
                <span>좋아요</span>
                <span>정답 률</span>
                <span>난이도</span>
              </div>
              <div class="line2"></div>
              <div class="infoData">
                <span>128</span>
                <span>99%</span>
                <span>☆★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default search;
