import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <>
      <RegisterFormStyled className="register-form" autoComplete="off">
        <h2 className="register-form__title">Register</h2>
        <div className="register-form__info">
          <label htmlFor="username" className="form">
            username
          </label>
          <input
            type="text"
            id="username"
            aria-label="username"
            placeholder="username"
          />
        </div>
        <div className="register-form__info">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            aria-label="password"
            placeholder="password"
          />
        </div>
        <div className="register-form__info">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            aria-label="email"
            placeholder="email"
          />
        </div>
        <div>
          <button className="register-form__button" type="submit">
            Register
          </button>
        </div>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
