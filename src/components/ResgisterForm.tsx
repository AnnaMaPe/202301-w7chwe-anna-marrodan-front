export const RegisterForm = (): JSX.Element => {
  return (
    <>
      <h2 className="form__title">Register</h2>
      <div className="form__username">
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
      <div className="form__password">
        <label htmlFor="email">password</label>
        <input
          type="text"
          id="password"
          aria-label="password"
          placeholder="password"
        />
      </div>
      <div className="form__email">
        <label htmlFor="email">email</label>
        <input type="text" id="email" aria-label="email" placeholder="email" />
      </div>
      <div>
        <button className="form__button" type="submit">
          Register
        </button>
      </div>
    </>
  );
};
