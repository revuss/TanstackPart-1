import React from "react";
import Button from "./common/Button";
import InputField from "./common/Input";
import Header from "./common/Head";
import BottomDesc from "./common/BottomDesc";

const Login: React.FC = () => {
  return (
    <>
      <div className="h-screen justify-center flex flex-col align-center">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <Header
              title="Sign in"
              description="Sign in below to access your account"
            ></Header>
            <div className="mt-5">
              <form action="">
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

                <Button>Sign in</Button>
                <BottomDesc
                  title="Signup"
                  description="Don't have a account yet?, "
                  link="/signup"
                ></BottomDesc>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
