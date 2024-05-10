"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputForm from "./InputForm";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { sign } from "crypto";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const route = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    setisLoading(true);
    try {

      if (type==="sign-up") {
        const newUser = await signUp(values);
        setUser(newUser);
      }

      if (type==="sign-in") {
        // const response = await signIn({email: values.email, password: values.password});
        // if(response){
        //   route.push('/');
        // }
      }
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setisLoading(false);
    }
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link className="flex cursor-pointer items-center gap-1" href="/">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Logo"
            //   className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-tblack-1">
            Maala Maal
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24  lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user ? "Link your account to get started" : "Enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid Link */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <InputForm
                      name="firstName"
                      label="First Name"
                      control={form.control}
                      type="text"
                      placeholder="Darshan"
                    />
                    <InputForm
                      name="lastName"
                      label="Last Name"
                      control={form.control}
                      type="text"
                      placeholder="Bhandary"
                    />
                  </div>
                  <InputForm
                    name="address"
                    label="Address"
                    control={form.control}
                    type="text"
                    placeholder="Enter your specific address"
                  />
                  <InputForm
                    name="city"
                    label="City"
                    control={form.control}
                    type="text"
                    placeholder="Mangalore"
                  />
                  <div className="flex gap-4">
                    <InputForm
                      name="state"
                      label="State"
                      control={form.control}
                      type="text"
                      placeholder="Karnataka"
                    />
                    <InputForm
                      name="postalCode"
                      label="Postal Code"
                      control={form.control}
                      type="text"
                      placeholder="575019"
                    />
                  </div>
                  <div className="flex gap-4">
                    <InputForm
                      name="dob"
                      label="Date of Birth"
                      control={form.control}
                      type="text"
                      placeholder="yyyy-mm-dd"
                    />
                    <InputForm
                      name="ssn"
                      label="SSN"
                      control={form.control}
                      type="text"
                      placeholder="1234"
                    />
                  </div>
                </>
              )}

              <InputForm
                name="email"
                label="Email"
                control={form.control}
                type="email"
                placeholder="example@example.com"
              />

              <InputForm
                name="password"
                label="Password"
                control={form.control}
                type="password"
                placeholder=""
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading ....
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {" "}
              {type === "sign-in"
                ? "Don't have an account ?"
                : "Already have a account?"}{" "}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
