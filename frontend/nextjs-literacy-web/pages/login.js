import KakaoLoginButton from "../components/atom/buttons/KakaoLoginButton";

export default function Login() {

  return (
    <div className="container">
      <div>
        <h2>로그인</h2>
      </div>
      <div>
        <KakaoLoginButton/>
      </div>
    </div>
  )
}