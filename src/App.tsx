import { useState } from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { useUser } from "./hooks/useUser";

const App = () => {
  const { registerUser } = useUser();

  const [, setRegistered] = useState(false);

  const handleSubmit = async (data: FormData) => {
    await registerUser(data);
    setRegistered(true);
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default App;
