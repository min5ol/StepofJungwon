import { useState } from "react";
import LoginInput from "../components/LoginInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // 초기화가 필요한 경우 값을 비웁니다
    setError(null); // 에러 메시지 초기화
    
    if (!username) {
      setError("아이디를 입력해주세요.");
      setUsername(""); // 값 초기화
      return;
    }
  
    if (!password) {
      setError("비밀번호를 입력해주세요.");
      setPassword(""); // 값 초기화
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "아이디 또는 비밀번호가 틀렸습니다.");
      }
  
      const data = await response.json();
      console.log("로그인 성공:", data);
  
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/home";
  
    } catch (err) {
      setError(err.message);
    }
  };

  // 비회원 로그인 처리
  const handleGuestLogin = () => {
    localStorage.setItem("user", JSON.stringify({ username: "guest" }));
    window.location.href = "/home";
  };

  return (
    <div>
      <header>
        <div className="BrandLogo">
          <img src="/img/YangflixLogoMobile.svg" alt="Logo" />
        </div>
        <div className="LoginTitle">Yangflix에 로그인하기</div>
      </header>

      <section>
        <LoginInput 
          label="아이디"
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput 
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <div className="LoginBTN" onClick={handleLogin}>로그인하기</div>
        <div className="GuestLoginBTN" onClick={handleGuestLogin}>비회원으로 시작하기</div>
      </section>
    </div>
  );
};

export default Login;
