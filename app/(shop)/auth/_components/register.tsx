"use client";
import React, { useState } from "react";
import { Title, Label, Input, Button } from "@/app/components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export interface RegisterType {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const router = useRouter();

  const handleRegister = async (data: RegisterType) => {
    try {
      const response = await axios.post("/api/register", data);
      toast.success("User registered succesfully");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback: SignInResponse | undefined) => {
        if (callback?.ok) {
          router.push("/");
        }
      });
      return response;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  const onSubmit = (data: RegisterType) => {
    console.log(data);
    console.log("submitted!!");
    handleRegister(data);
  };

  return (
    <div className="m-auto bg-white w-[50%] flex justify-center h-auto">
      <div>
        <form className="w-full    space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign up to your account</Title>
          <div>
            <Label>Email address</Label>
            <input type="text" {...register("email")} />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
          </div>
          <div>
            <Label>Name</Label>
            <input type="text" {...register("name")} />
            {/* {errors.name && <p>{errors.name.message}</p>} */}
          </div>
          <div>
            <Label>Password</Label>
            <div className="relative">
              <input
                {...register("password")}
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
