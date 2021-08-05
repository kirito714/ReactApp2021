import React from "react";
// import './Signupform.css'

export default function Signupform() {
  return (
    <div classNameName="container">
      <form className="form login-form" id="">
        <input
          className="form-input"
          type="text"
          id="email-login"
          placeholder="Email:"
        />

        <input
          className="form-input"
          type="password"
          id="password-login"
          placeholder="Password:"
        />

        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>

      <form className="form signup-form">
        <input
          className="form-input"
          type="text"
          id="name-signup"
          placeholder="name:"
        />

        <input
          className="form-input"
          type="text"
          id="email-signup"
          placeholder="Email:"
        />

        <input
          className="form-input"
          type="password"
          id="password-signup"
          placeholder="Password:"
        />

        <button className="btn btn-primary" type="submit">
          signup
        </button>
      </form>
    </div>
  );
}
