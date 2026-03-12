"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";;
import { useAuth } from "@/context/AuthContext/AuthContext";
import {  useState } from "react";
import VerifyEmail from "./VerifyEmail";
import FormInput from "../FormInput/FormInput";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

function SignUp(props: any) {
  const { showModal, setShowModal, toggleSignUp, setShowSignUp } = props || {};
  const [closeModal, setCloseModal] = useState(false);
  const [email, setEmail] = useState("");

  const { register } = (useAuth() as any) || {};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  async function submitFunc(values: any) {
    const customerData = values;
    const result = await register(customerData);
    if (result) {
      setEmail(result.email);
      setCloseModal(true);
    }
  }

  return (
    <>
      {closeModal ? (
        <VerifyEmail email={email} />
      ) : (
        <div className="pt-20 md:pt-24 px-0 md:px-5 lg:px-36">
          <h3 className="font-semibold mx-auto text-4xl text-center pb-10">
            Join Our Amazing<br></br> Community
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitFunc)}
              className="space-y-8"
            >
              <>
                <div className="">
                  <FormInput
                    control={form.control}
                    name="name"
                    label="Full Name"
                    type="text"
                    id='name'
                    placeholder="Enter your name"
                  />
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
                </div>
                <div className="pb-7 md:pb-6">
                  <Button
                    type="submit"
                    variant="normal"
                    className="w-full rounded-full flex justify-center items-center gap-2"
                  >
                    Create an account
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
              Already a member?{" "}
              <span
                className="cursor-pointer text-primary font-medium"
                onClick={toggleSignUp}
              >
                Sign In
              </span>
            </p>
          </Form>
        </div>
      )}
    </>
  );
}

export default SignUp;
