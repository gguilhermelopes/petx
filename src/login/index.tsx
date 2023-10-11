import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="col-start-2 p-12">
      <h1 className="font-semibold text-[3rem] text-p2 mb-8">
        Seja bem-vindo(a) ao{" "}
        <span className="font-manrope font-extrabold">Petx</span>!
      </h1>
      <h2 className="font-semibold text-[2rem] text-p3 mb-16">
        Faça seu login abaixo:
      </h2>
      <form>
        <div className="flex gap-4 mb-8">
          <Input
            label="Email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            label="Senha"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button variation="PRIMARY">Login</Button>
      </form>
    </div>
  );
};

export default Login;
