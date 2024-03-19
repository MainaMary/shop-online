"use client";
import React, { useState } from "react";
import { Title, Label, Input, Button } from "@/app/components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { useForm } from "react-hook-form";
export interface RegisterType {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = formValues;
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
  const onSubmit = (data: RegisterType) => {
    console.log({ data });
    console.log("submitted!!");
  };
  console.log(errors);
  return (
    <div className="m-auto bg-white w-[50%] flex justify-center">
      <div>
        <form className="w-full   space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign up to your account</Title>
          <div>
            <Label>Email address</Label>
            <Input
              type="text"
              id="email"
              {...register("email", { required: true })}
            />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              id="name"
              errors={errors.name}
              {...register("name", { required: true, maxLength: 80 })}
            />
            {/* {errors.name && <p>{errors.name.message}</p>} */}
          </div>
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Input
                {...register("password", { required: true, maxLength: 80 })}
                id="password"
                errors={errors.password}
                type={visible ? "text" : "password"}
              />
              <div
                onClick={handleVisible}
                className="absolute right-2 top-3 cursor-pointer"
              >
                {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
          <div className="my-4 block  md:flex justify-between">
            <p>
              Have an account?{" "}
              <span className="text-primary-color">
                <Link href="/auth/login">Sign in</Link>
              </span>
            </p>
            <p>Forgot password?</p>
          </div>
          <button type="submit">submit</button>
          {/* <Button>Sign up</Button> */}
        </form>
      </div>
    </div>
  );
};
export default Register;
