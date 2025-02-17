import { Quote } from "../components/Quote";
import { AuthForm } from "../components/AuthForm";
import { TopBar } from "../components/TopBar";

export const Signin = ({
  setUserProfile,
  setIsAuthenticated,
  userProfile,
}: {
  setUserProfile: React.Dispatch<React.SetStateAction<string>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: string;
}) => {
  console.log("userProfile check", userProfile);
  return (
    <>
      <TopBar name={userProfile} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AuthForm
          setUserProfile={setUserProfile}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Quote />
      </div>
    </>
  );
};
