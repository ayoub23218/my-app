import Link from "next/link";
import { getBlogs } from "../../lib/actionblog";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-40">
        <h1 className="text-3xl font-bold text-gray-800">Tous les Blogs</h1>
        <Link
          href="/Blog2/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Ajouter un blog
        </Link>
      </div>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/Blog2/edit/${blog.id}`}
            className="block bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {blog.content}
                </p>
              </div>
              <span className="text-gray-400 text-sm">✎ Éditer</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
