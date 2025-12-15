import Link from "next/link";
import { createBlog } from "../../../lib/actionblog";

export default function NewBlogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/blog2" className="text-gray-500 hover:text-gray-800">
          ← Retour aux blogs
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Créer un nouvel article</h1>

      <form
        action={createBlog}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Titre
          </label>
          <input
            name="title"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Titre de l'article"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Contenu
          </label>
          <textarea
            name="content"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Rédigez votre contenu ici..."
          />
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition self-end">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
