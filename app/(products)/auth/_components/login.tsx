import React from "react";
import { Title, Label, Input, Button } from "@/app/components";

const Login = () => {
  return (
    <div className="flex w-[50%] shadow-md justify-center mt-6 m-auto border border-solid">
      <form className="w-full  p-10 space-y-2">
        <Title>Sign in to your account</Title>
        <div>
          <Label>Email address</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" />
        </div>
        <Button>Sign up</Button>
      </form>
    </div>
  );
};

export default Login;
