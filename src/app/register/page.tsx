"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MailOpen } from "lucide-react";
import React from "react";

export default function componentName() {
  const [formStatus, setFormStatus] = React.useState<boolean>(false);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  function toggleFormStatus() {
    setFormStatus((prev) => !prev);
  }

  return (
    <div className="container h-screen flex flex-col justify-center items-center">
      <section className="w-[36%] flex flex-col gap-10 items-center p-10 border border-gray-200 rounded-lg">
        <img src="/images/long-logo.png" />
        {formStatus ? (
          <form
            className="w-full flex flex-col gap-2.5"
            onSubmit={handleOnSubmit}
          >
            <h1 className="text-2xl font-semibold self-center">
              Login with Email
            </h1>
            <label htmlFor="email">Email</label>
            <Input name="email" type="email" placeholder="Email" required />
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <Button type="submit">
              <MailOpen /> Login with email
            </Button>
            <div className="w-full flex flex-col gap-2.5 items-center">
              <h3 className="font-base text-gray-500">or</h3>
              <Button variant="secondary" className="w-full">
                <img
                  src="/images/icon-google.svg"
                  className="w-[24px] h-[24px]"
                />
                Login with Google
              </Button>
              <Button variant="link" onClick={toggleFormStatus}>
                Don't have an account? Sign up!
              </Button>
            </div>
          </form>
        ) : (
          <form className="w-full flex flex-col gap-2.5">
            <h1 className="text-2xl font-semibold self-center">
              Sign up with Email
            </h1>
            <label htmlFor="email">Email</label>
            <Input name="email" type="email" placeholder="Email" required />
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <label htmlFor="confirm-password">Confirm password</label>
            <Input
              name="confirm-password"
              type="password"
              placeholder="Confirm password"
              required
            />
            <Button type="submit">
              <MailOpen /> Sign up with email
            </Button>
            <div className="w-full flex flex-col gap-2.5 items-center">
              <h3 className="font-base text-gray-500">or</h3>
              <Button variant="secondary" className="w-full">
                <img
                  src="/images/icon-google.svg"
                  className="w-[24px] h-[24px]"
                />
                Sign up with Google
              </Button>
              <Button variant="link" onClick={toggleFormStatus}>
                Already own an account? Login!
              </Button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
