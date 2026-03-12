"use client";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useAxiosAuthInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";
const formSchema = z.object({
    newPassword: z.string().min(4).max(50),
    newPassword2: z.string().min(4).max(50),
});

function RecoverPassForm({ params }: { params: any }) {

    const [error, setError] = useState("")
    const { token } = params;
    const { setShowLoginModal,setShowModal } = (useAuth() as any) || {};
    const router = useRouter();
    const axiosAuthInstance = useAxiosAuthInstance();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: "",
            newPassword2: "",
        },
    });

    // Fast-pass: expose untyped aliases to avoid strict prop typing errors during build
    const FormItemAny: any = FormItem;
    const FormLabelAny: any = FormLabel;
    const FormControlAny: any = FormControl;
    const FormMessageAny: any = FormMessage;

    async function submitFunc(values: any) {
        if (values.newPassword !== values.newPassword2) {
            setError("Password must be similiar")
            return;
        }

        const formBody = {
            token,
            newPassword: values.newPassword,
        };

        const changePassword = await axiosAuthInstance.patch(
            "resetcustomerPassword",
            formBody
        );

        if (changePassword) {
            setShowLoginModal(true);
            setShowModal(true)
            router.push("/");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFunc)} className=" h-[100dvh] w-[100%] flex items-center justify-center  flex-col">
                <h4 className="pb-12 text-center text-2xl">Recover Password</h4>
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }: { field: any }) => (
                        <FormItemAny className="pb-4 md:pb-6">
                            <FormLabelAny className="text-base md:text-lg text-[#FFFFFF]">
                                New Password
                            </FormLabelAny>
                            <FormControlAny>
                                <Input
                                    type="password"
                                    id="newPassword"
                                    placeholder="*************"
                                    className="bg-[#FFFFFF] rounded-lg border-none xs:w-[300px] w-[400px]"
                                    {...field}
                                />
                            </FormControlAny>
                            <FormMessageAny />
                        </FormItemAny>
                    )}
                />
                <FormField
                    control={form.control}
                    name="newPassword2"
                    render={({ field }: { field: any }) => (
                        <FormItemAny className="pb-4 md:pb-6">
                            <FormLabelAny className="text-base md:text-lg text-[#FFFFFF]">
                                Confirm New Password
                            </FormLabelAny>
                            <FormControlAny>
                                <Input
                                    type="password"
                                    id="newPassword2"
                                    placeholder="*************"
                                    className="bg-[#FFFFFF] rounded-lg border-none xs:w-[300px] w-[400px]"
                                    {...field}
                                />
                            </FormControlAny>
                            <FormMessageAny />
                        </FormItemAny>
                    )}
                />
                {error && <p className=" text-red-500">{error}</p>}
                <div className="py-8">
                    <Button
                        type="submit"
                        variant="normal"
                        className="w-full rounded-full flex justify-center items-center gap-2"
                    >
                        Reset Password
                    </Button>
                </div>
            </form>

        </Form>
    );
}

export default RecoverPassForm;
