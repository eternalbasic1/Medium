import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const TopBar = ({ name }: { name: string }) => {
  console.log("WHAT IS NAME", name);
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to="/blogs">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg"
          alt="Medium Logo"
          className="h-8"
        />{" "}
      </Link>
      {name?.length > 0 && (
        <div>
          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              New
            </button>
          </Link>

          <Avatar size={"big"} name={name ?? "⚠️"} />
        </div>
      )}
    </div>
  );
};
