import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <>
      {/* REGISTER FORM */}

      <div className="register-card">

        <div className="register-header">
          <span className="register-tag">
            WELCOME
          </span>

          <h1>Register Now</h1>

          <p>
            Register now and start your journey.
          </p>
        </div>


        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>


          <div className="input-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              minLength="6"
              required
            />
          </div>


          <button
            type="submit"
            className="signup-btn"
          >
            <span>Signup Now</span>

            <span className="arrow">
              →
            </span>
          </button>

        </form>



      </div>


      {/* SUCCESS TOAST */}

      {success && (
        <div className="success-box">

          <span className="success-icon">
            ✓
          </span>

          <span className="success-message">
            Registration Successful!
          </span>

          <button
            type="button"
            className="success-close"
            onClick={() => setSuccess(false)}
          >
            ×
          </button>

        </div>
      )}
    </>
  );
}

export default RegisterForm;