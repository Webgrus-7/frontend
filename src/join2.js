import Header_1 from "./header";
import Header_2 from "./header2";
import "./css/join2.css";
import { Link } from "react-router-dom";
import Register from "./img/register_title.png"

function Join2()
{
    return (
        <div className="join__outer">
            <Header_1 />
            <Header_2 />
            <div className="join__block-04">
                <img className="join__img-02" src={Register}></img>
                <span className="join__block__text-06">회원가입</span>
                <div>
                    <span className="join__main__text">
                <div>
                    <span className="join__main__text-01">가치풀자</span>
                    <span className="join__main__text-02">에서</span>
                </div>
                <div>
                    회원님을 알아가는 데에 도움이 되는 
                    <span className="join__main__text-03"> 정보를 입력해주세요.</span>
                </div>
                </span>
                </div>
                <span className="EMAIL__text">이메일</span>
                <form>
                    <input type="text" className="EMAIL__input"></input>
                </form>
                <span className="EMAIL__text">휴대폰 번호</span>
                <form>
                    <input type="text" className="EMAIL__input"></input>
                </form>
                <span className="EMAIL__text">한 줄 자기소개</span>
                <form>
                    <input type="text" className="EMAIL__input"></input>
                </form>
                <span className="EMAIL__text">가치 풀고 싶은 분야</span>
                <form>
                    <input type="text" className="EMAIL__input"></input>
                </form>
                <Link to="/join3">
                <div className="join__block__button-02">
                    <span className="join__block__button__text">다음</span>
                </div>
                </Link>
            </div>
        </div>
    );
}
export default Join2;