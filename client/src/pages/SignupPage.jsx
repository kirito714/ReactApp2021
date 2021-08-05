 export default function SignupPage() {
    return (
        <>
        <h1>Sign up or log in!</h1>
        <div classNameNameName="container">
      <form className="form login-form" id="">
        <input
          classNameName="form-input"
          type="text"
          id="email-login"
          placeholder="Email:"
        />

        <input
          classNameName="form-input"
          type="password"
          id="password-login"
          placeholder="Password:"
        />

        <button classNameName="btn btn-primary" type="submit">
          login
        </button>
      </form>

      <form classNameName="form signup-form">
        <input
          classNameName="form-input"
          type="text"
          id="name-signup"
          placeholder="name:"
        />

        <input
          classNameName="form-input"
          type="text"
          id="email-signup"
          placeholder="Email:"
        />

        <input
          classNameName="form-input"
          type="password"
          id="password-signup"
          placeholder="Password:"
        />

        <button classNameName="btn btn-primary" type="submit">
          signup
        </button>
      </form>
    </div>
        </>
    )
}