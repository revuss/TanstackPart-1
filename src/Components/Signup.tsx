import React from "react";
import InputField from "./common/Input";
import Header from "./common/Head";
import Button from "./common/Button";
import BottomDesc from "./common/BottomDesc";
import { useForm } from "@tanstack/react-form";

const Signup: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <>
      <div className="h-screen justify-center flex flex-col align-center">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <Header
              title="Sign Up"
              description="Sign Up below to access the app"
            ></Header>
            <div className="mt-5">
              <form>
                <InputField
                  type="email"
                  id="email"
                  name="email"
                  label="Email Address"
                  placeholder="Email Address"
                  autoComplete="NA"
                ></InputField>
                <InputField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="........"
                  autoComplete="NA"
                ></InputField>
                <InputField
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm Password"
                  placeholder="........"
                  autoComplete="NA"
                ></InputField>
              </form>
              <Button onClick={form.handleSubmit}>Sign in</Button>
              <BottomDesc
                title="Login"
                description="Already have an account?, "
                link="/login"
              ></BottomDesc>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
