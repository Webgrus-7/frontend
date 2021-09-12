import Header from "./header";
import "./css/main.css";
import ddaom from "./img/ddaom1.png";
function Main() {
    let text_01 = ["나만의 공부메이트, 웹 테스트와 함께해요.",<br/>,
        "웹테스트인과 차근차근 함께 성장할 수 있어요."]
    let text_02 = ["웹테스트면 충분해!",<br/>,"웹테스트로 정보공유와 풀이 Q&A까지."]
    return (
        <div className="main">
            <div className="main-01">
                <Header />
                <div className="main__img">
                <img src={ddaom} className="ddaom"></img>
                </div>
                <div className="main__text__block-01">
                    <span className="main__text-01">보영</span>
                    <span className="main__text-02">님,</span>
                    <span className="main__text-03">이제 혼자하는 공부는 끝.</span>
                </div>
                <div className="main__bar"></div>
                <div className="main__text__block-02">
                    <span>{text_01}</span>
                </div>
            </div>
            <div className="main-02">
                <span className="main__hash">#</span>
                <div className="main__dot"></div>
                <div className="main__dot"></div>
                <span className="main__text-04">영어부터</span>
                <div className="main__text__block-03">
                <span className="main__text-04">전공까지</span>
                </div>
                <div className="main__text__block-04">
                <span className="main__text-05">{text_02}</span>
                </div>
                <div className="main__button">
                    <span className="main__button__text">더 찾아보기</span>
                </div>
                
            </div>
        </div>
        
    );
  }
  
  export default Main