"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import CheckEmail from "./CheckEmail";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FORGOT_PASSWORD_API } from "@/Utilities/APIs/AuthAPIs/AuthAPIs";
import FormInput from "../FormInput/FormInput";
const formSchema = z.object({
  email: z.string().min(2).max(50),
});
function ForgetPassword(props: any) {
  const { showForgetPassword, setShowForgetPassword } = props || {};
  const axiosPublicInstance = useAxiosPublicInstance()

  const [verifyEmail, setVerifyEmail] = useState(false)
  const [email, setEmail] = useState("")
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })
  const submitFunc = async (values: any) => {
    const email = values.email
    const { data } = await axiosPublicInstance.post(FORGOT_PASSWORD_API, { email })
    if (data.email) {
      setEmail(data.email)
      // setShowForgetPassword(false)
      setVerifyEmail(true)
    }
  }

  return (
    <>
      {
        verifyEmail ? <CheckEmail email={email} /> : <div className="px-0 md:px-5 lg:px-36">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFunc)} className="">
              <h4 className="pb-12 text-center text-2xl">Forget Password</h4>
              {/* <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base md:text-lg text-[#FFFFFF]">
              Email
            </FormLabel>
            <FormControl>
              <Input id="email" className="bg-[#FFFFFF] rounded-lg border-none" placeholder="Enter email address" {...field} />
            </FormControl>
            <FormDescription className="text-base text-[#FFFFFF] font-light">
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}
              <FormInput
                control={form.control}
                name="email"
                label="Email"
                type="email"
                id='email'
                placeholder="Enter email address"
                // description="This is your public display name."
              />
              <div className="pb-7 md:pb-6 pt-12">
                {/* <Link> */}
                <Button
                  variant="normal"
                  className="w-full rounded-full flex justify-center items-center gap-2"
                >
                  Reset Password
                </Button>
                {/* </Link> */}
              </div>
              <div className="">
                <Button
                  variant="underline"
                  className=" w-full mx-auto"
                  onClick={() => setShowForgetPassword(false)}
                >
                  Back to Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      }
    </>
  );
}

export default ForgetPassword;
