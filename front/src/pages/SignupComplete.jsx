import brandLogo from "../assets/YANGFLIX.png";
import Rounded from "../components/RoundedButton";
import { useNavigate } from "react-router-dom";

export default function SignupComplete() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center text-white">
      <img src={brandLogo} className="pt-[23.26vw]" alt="YANGFLIX 로고" />

      <div className="text-center pt-[9.3vw]">
        <p className="text-[5.58vw] font-AppleSDGothicNeoR">
          가입이 완료되었습니다.
        </p>
        <p className="text-[5.58vw] font-AppleSDGothicNeoR">
          로그인을 통해 yangflix를 즐겨주세요.
        </p>
      </div>

      <div className="pt-[13.95vw] w-full flex justify-center">
        <Rounded onClick={handleGoToLogin} variant="primary">
          로그인하러 가기
        </Rounded>
      </div>

      <p className="pt-[120vw] pb-[9.3vw] text-white text-[1.86vw] font-AppleSDGothicNeoL">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
