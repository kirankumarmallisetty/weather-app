import { useNavigate } from "react-router-dom";
import "./LoginStyles.css";
function Enroll() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
  }
  return (
    <div className="sign-up">
      <div className="log-in">
        <h1 align="center">Register</h1>
        <form align="center">
          <input placeholder="Enter your Full Name" />
          <br></br>
          <input placeholder="Enter your Email" />
          <br></br>
          <input placeholder="Enter Your Password" />
          <br></br>
          <button>Register</button>
          <br></br>
          Already have an account?
          <button onClick={(e) => handleClick()}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default Enroll;
