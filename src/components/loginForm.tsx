import { useState } from "react";

const loginForm = () => {
  const [name, setName] = useState<string>("abhi");
  return <div>loginForm {name}</div>;
};

export { loginForm };
