import { Quote } from "../components/Quote";
import { AuthForm } from "../components/AuthForm";
import { TopBar } from "../components/TopBar";

export const Signin = () => {
  return (
    <>
      <TopBar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AuthForm />
        <Quote />
      </div>
    </>
  );
};
