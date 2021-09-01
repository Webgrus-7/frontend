import Header from "./header";
import "./css/main.css";
import ddaom from "./img/ddaom1.png";
function Main() {
    let text = ["나만의 공부메이트, 웹 테스트와 함께해요.",<br/>,
        "웹테스트인과 차근차근 함께 성장할 수 있어요."]
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
                    <span>{text}</span>
                </div>
            </div>
        </div>
        
    );
  }
  
  export default Main;