import { Quote } from "../components/Quote";
import { AuthForm } from "../components/AuthForm";

export const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <AuthForm />
      <Quote />
    </div>
  );
};
