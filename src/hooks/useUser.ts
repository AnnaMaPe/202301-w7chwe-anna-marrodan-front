export const useUser = () => {
  const url = process.env.REACT_APP_URL_API;
  const generalEndpoint = "/social";
  const registerEndpoint = "/create";

  const registerUser = async (registerUserData: FormData) => {
    await fetch(`${url}${generalEndpoint}${registerEndpoint}`, {
      method: "POST",
      body: registerUserData,
    });
  };
  return { registerUser };
};
