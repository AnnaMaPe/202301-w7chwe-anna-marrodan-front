import styled from "styled-components";

const RegisterFormStyled = styled.form`
  background-color: #cdf6e8;
  margin: auto;
  width: 30rem;
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 20%;

  label {
    font-size: 25px;
  }
  input {
    font-size: 25px;
    border-radius: 5px;
    border: #aaf0d2;
    padding: 0.5rem;
  }

  .register-form {
    &__title {
      margin-top: 0px;
      font-size: 50px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    &__button {
      border: solid 4px #aaf0d2;
      margin-top: 1rem;
      border-radius: 5px;
      font-size: 25px;
      padding: 1rem;
    }
  }
`;

export default RegisterFormStyled;
