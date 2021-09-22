import Header from "./header";
import "./css/login.css";

function Login()
{
    let text = ["web test는 어쩌고 저쩌고...아직 못 정함",<br />,
    "기반으로 한 공부하는 모두를 위한 공유 스터디서비스"]
    return (
        <div className="login__outer">
            <Header />
            <span className="feed__text-01">피드</span>
            <span className="feed__text-02">Q</span>
            <span className="feed__text-03">내 피드</span>
            <div className="login__bar"></div>
            <div className="login__block-01">
                <span className="login__block__text-01">log in</span>
                <div className="login__block-02">
                    <span className="ID__text">ID</span>
                    <form>
                        <input type="text" className="ID__input"></input>
                    </form>
                    <span className="PW__text">PW</span>
                    <form>
                        <input type="password" className="ID__input"></input>
                    </form>
                </div>
                <div className="login__block__button">
                    <span className="login__block__button__text">로그인</span>
                </div>
                <span className="login__block__text-02">web test가 처음이신가요?</span>
            </div>
            <div className="login__block-03">
                <span className="login__block__text-03">web test</span>
                <span className="login__block__text-04">{text}</span>
            </div>
        </div>
    );
}
export default Login