import React from "react";
// import './Signupform.css'

export default function Signupform() {
  return (
    <div className="container">
      <form class="form login-form" id="">
        <input
          class="form-input"
          type="text"
          id="email-login"
          placeholder="Email:"
        />

        <input
          class="form-input"
          type="password"
          id="password-login"
          placeholder="Password:"
        />

        <button class="btn btn-primary" type="submit">
          login
        </button>
      </form>

      <form class="form signup-form">
        <input
          class="form-input"
          type="text"
          id="name-signup"
          placeholder="name:"
        />

        <input
          class="form-input"
          type="text"
          id="email-signup"
          placeholder="Email:"
        />

        <input
          class="form-input"
          type="password"
          id="password-signup"
          placeholder="Password:"
        />

        <button class="btn btn-primary" type="submit">
          signup
        </button>
      </form>
    </div>
  );
}
