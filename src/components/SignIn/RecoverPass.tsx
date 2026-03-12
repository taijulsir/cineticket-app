"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import FormInput from "../FormInput/FormInput";
const formSchema = z.object({
  email: z.string().min(2).max(50),
});
function RecoverPass() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const submitFunc = (values: Record<string, any>) => {
  }
  return (
    <div className="px-0 md:px-5 lg:px-36">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitFunc)} className="">
        <h4 className="pb-12 text-center text-2xl">Recover Password</h4>
        <FormInput
          control={form.control}
          name="password"
          label="New Password"
          type="password"
          id='password'
          placeholder="*************"
        />

        <FormInput
          control={form.control}
          name="password"
          label="Confirm New Password"
          type="password"
          id='password'
          placeholder="*************"
        />
        <div className="py-8">
          <Button
            variant="normal"
            className="w-full rounded-full flex justify-center items-center gap-2"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </Form>
    </div>
  );
}

export default RecoverPass;
