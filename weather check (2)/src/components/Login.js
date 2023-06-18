import { useNavigate } from "react-router-dom";
import "./LoginStyles.css";
function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  return (
    <div className="sign-up">
      <div className="log-in">
        <h1 align="center">LOGIN</h1>
        <form align="center">
          <input placeholder="Enter your Email" />
          <br></br>
          <input placeholder="Enter Your Password" />
          <br></br>
          <button>Login</button>
          <br></br>
          Don't have an account?
          <button onClick={(e) => handleClick()}>Register</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
