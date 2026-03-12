"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import { useAuth } from "@/context/AuthContext/AuthContext";
import FormInput from "../FormInput/FormInput";
import toast from "react-hot-toast";

const formSchema = z.object({
  // username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

function SignIn(props: any) {
  const { setShowModal, toggleSignUp } = props || {};
  const { customer, login } = (useAuth() as any) || {};
  const [error, setError] = useState(null);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  async function submitFunc(values: any) {
    const customerData = values;
    const result = await login(customerData);
    if (result.email) {
      toast.success("Login Successful");
      setShowModal(false)
    }
    if (result.status === 400) {
      setError(result.data.message)
    } else {
      setError(null)
    }
  }

  return (
    <div className="pt-20 md:pt-24">
      {showForgetPassword ? (
        <ForgetPassword showForgetPassword={showForgetPassword} setShowForgetPassword={setShowForgetPassword} />
      ) : (
        <div className="px-0 md:px-5 lg:px-36">
          <h3 className=" font-semibold mx-auto text-4xl text-center pb-10">
            Welcome to Amazing<br></br> Community
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitFunc)}
              className="space-y-8"
            >
              <>
                <div>
                  <FormInput
                    control={form.control}
                    name="email"
                    label="Email"
                    type="email"
                    id='email'
                    placeholder="Enter your Email"
                  />
                  <FormInput
                    control={form.control}
                    name="password"
                    label="Password"
                    type="password"
                    id='password'
                    placeholder="*************"
                  />
                  <button
                    onClick={() => setShowForgetPassword(true)}
                    className="text-[#FFE7A0]"
                  >
                    Forgot Password?
                  </button>
                </div>
                { error ==="Invalid Credentials"  && <h6 className="text-xs md:text-sm text-center text-red-600 font-bold">Incorrect Email or Password</h6>}
                <div className="pb-7 md:pb-6">
                  <Button
                    variant="normal"
                    className="w-full rounded-full flex justify-center items-center gap-2"
                  >
                    Sign In
                    <FaArrowRight />
                  </Button>
                </div>
              </>
            </form>
            <h6 className="text-xs md:text-sm text-center pb-3 md:pb-4">
              By continuing, you agree to the{" "}
              <span className="text-xs md:text-sm">Terms of Service</span> and
              acknowledge you’ve read our{" "}
              <span className="text-xs md:text-sm">Privacy Policy</span>.{" "}
            </h6>
            <p className="text-sm md:text-base text-center">
              Not a member yet?{" "}
              <span
                className="cursor-pointer text-primary font-medium"
                onClick={toggleSignUp}
              >
                Sign Up
              </span>
            </p>
          </Form>
        </div>
      )}
    </div>
  );
}

export default SignIn;
