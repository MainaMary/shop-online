"use client";
import React, { useState } from "react";
import { Title, Label, Input, Button } from "@/app/components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className="flex w-[50%] shadow-lg justify-center  m-auto border border-solid bg-white">
      <div className="w-full p-10">
        <form className="w-full   space-y-2">
          <Title>Sign in to your account</Title>
          <div>
            <Label>Email address</Label>
            <Input
              type="text"
              name="email"
              onChange={handleInputChange}
              value={email || ""}
            />
          </div>
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Input
                name="password"
                onChange={handleInputChange}
                type={visible ? "text" : "password"}
                value={password}
              />
              <div
                onClick={handleVisible}
                className="absolute right-2 top-3 cursor-pointer"
              >
                {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>
          <div className="my-4 block  md:flex justify-between">
            <p>
              Don't have an account?{" "}
              <span className="text-primary-color">
                <Link href="/auth/register">Sign up</Link>
              </span>
            </p>
            <p>Forgot password?</p>
          </div>
          <Button>Sign in</Button>
        </form>
        <form>
          <div className="my-4 items-center flex before:border-t-2 before:flex-1  before:border-gray-500  after:border-t-2 after:flex-1  after:border-gray-500">
            <p className="uppercase text-center font-medium text-2xl mx-2">
              or
            </p>
          </div>

          <Button name="Continue with Google" type="submit">
            <FcGoogle />
            <p className="ml-4">Continue with Google</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
