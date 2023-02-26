import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterFormProps {
  onSubmit: (userData: FormData) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps): JSX.Element => {
  const submmitUserCredentials = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = new FormData(event.currentTarget);

    onSubmit(userData);
  };

  return (
    <>
      <RegisterFormStyled
        className="register-form"
        autoComplete="off"
        encType="multipart/form"
        onSubmit={submmitUserCredentials}
      >
        <h2 className="register-form__title">Register</h2>
        <div className="register-form__info">
          <label htmlFor="username" className="form">
            username
          </label>
          <input
            type="text"
            id="username"
            name="name"
            aria-label="username"
            placeholder="username"
          />
        </div>
        <div className="register-form__info">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            aria-label="password"
            placeholder="password"
          />
        </div>
        <div className="register-form__info">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
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
