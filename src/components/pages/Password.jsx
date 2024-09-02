import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";
import "./Password.css";

function Password({exitFunction}) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("E-mail enviado correctamente!");
    } catch (error) {
      console.log("Algo fue");
      console.error(error.message);
    }
  };

  return (
    <div className="reset-container">
      <svg
        onClick={exitFunction}
        className="exit-button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>

      <h1>Forgot the password?</h1>

      <form onSubmit={handleSubmit} className="reset-form">
        <input
          placeholder="Write your email to reset password"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="send-reset-email">Send</button>
      </form>
    </div>
  );
}

export default Password;
