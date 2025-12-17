import BlogForm from "../../components/BlogForm";
import BlogCard from "../../components/BlogCard";
import {
  createBlog,
  getBlogs,
  deleteBlog,
  editBlog,
} from "../../lib/actionblog";

export default async function Blog() {
  const Blogs = await getBlogs();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
        Mon CV
      </h2>

      <BlogForm createAction={createBlog} />

      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {Blogs.map((Blog) => (
          <BlogCard
            key={Blog.id}
            task={Blog}
            editAction={editBlog}
            deleteAction={deleteBlog}
          />
        ))}
      </div>
    </section>
  );
}
