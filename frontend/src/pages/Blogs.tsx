import { TopBar } from "../components/TopBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = ({ userProfile }: { userProfile: string }) => {
  const { loading, blogs } = useBlogs();
  console.log("blogs", blogs);
  console.log("loading", loading);
  if (loading) {
    return (
      <div>
        <TopBar name={userProfile} />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar name={userProfile} />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog?.id}
              authorName={blog?.author?.name || "Anonymous"}
              title={blog?.title}
              content={blog?.content}
              publishedDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
