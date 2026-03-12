"use client";
import { z } from "zod";
import { Button as ButtonAny } from "@/components/ui/button";
import {
  Form as FormAny,
  FormDescription as FormDescriptionAny,
} from "@/components/ui/form";

const formSchema = z.object({
  fname: z.string().min(2).max(50),
  lname: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  cardholder: z.string().min(2).max(50),
  cardnumber: z.string().min(2).max(50),
  cvc: z.string().min(2).max(50),
  month: z.string().min(2).max(50),
  year: z.string().min(2).max(50),
});
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import { Checkbox as CheckboxAny } from "../ui/checkbox";
import FormInput from "../FormInput/FormInput";

function Payment() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: any) => {
  };
  return (
    <div>
      <div className="w-full px-5 md:px-0 md:w-3/5 mx-auto pt-8 md:pt-32 pb-10 md:pb-40 mt-[90px]">
        <div>
          <div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
                <div className="">
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold md:font-medium pb-6 md:pb-10">
                      Billing Address{" "}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-0 lg:gap-7">

                    <FormInput
                      control={form.control}
                      name="fname"
                      label="First Name"
                      type="text"
                      id='fname'
                      placeholder="Enter your first name"
                    />

                    <FormInput
                      control={form.control}
                      name="lname"
                      label="Last Name"
                      type="text"
                      id='lname'
                      placeholder="Enter your last name"
                    />
                  </div>
                  <FormInput
                    control={form.control}
                    name="email"
                    label="Email"
                    type="email"
                    id='email'
                    placeholder="Enter email address"
                  />
                  <FormInput
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    type="text"
                    id='phone'
                    placeholder="01900000000"
                  />

                  <div className="flex items-center space-x-2">
                    <input id="terms" type="checkbox" className="text-white w-4 h-4 rounded" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium text-[#FFFFFF] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <span className="text-primary underline">
                        Term & Conditions
                      </span>
                    </label>
                  </div>


                </div>

                <div className="">
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold md:font-medium pb-6 md:pb-10">
                      Payment
                    </p>
                  </div>
                  <div className="bg-[#fafafa0c] px-5 md:px-14 py-8 md:py-12 rounded-2xl border">
                    <FormInput
                      control={form.control}
                      name="cardholder"
                      label="Cardholder Name"
                      type="text"
                      id='cardholder'
                      placeholder="Enter cardholder name"
                    />

                    <FormInput
                      control={form.control}
                      name="cardnumber"
                      label="Card Number"
                      type="text"
                      id='cardnumber'
                      placeholder="Enter Card Number"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">

                      <FormInput
                        control={form.control}
                        name="cvc"
                        label="CVC"
                        type="text"
                        id='cvc'
                        placeholder="Enter number"
                      />


                      <FormInput
                        control={form.control}
                        name="month"
                        label="Month"
                        type="text"
                        id='month'
                        placeholder="Enter Month"
                      />

                      <FormInput
                        control={form.control}
                        name="year"
                        label="Year"
                        type="text"
                        id='year'
                        placeholder="Enter Year"
                      />
                    </div>
                    <div className="flex justify-end pt-5">
                      <ButtonAny
                        variant="auth"
                        className="px-10 w-full font-medium gap-2"
                      >
                        Pay $30.00
                        <IoArrowForward />
                      </ButtonAny>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
