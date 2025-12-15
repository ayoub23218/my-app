import { getBlogs, editBlog } from "../../../../lib/actionblog"; // Vérifie le chemin

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage(props: BlogPostPageProps) {
  // 1. CORRECTION : On garde l'id en String (car c'est un UUID)
  const { id } = await props.params;

  // 2. On récupère tout
  const allBlogs = await getBlogs();

  // 3. CORRECTION : Comparaison simple de string à string
  // (Plus besoin de Number() ici)
  const post = allBlogs.find((b) => b.id === id);

  if (!post) {
    // Petit ajout pour debug si jamais ça échoue encore
    return (
      <div className="pt-24 text-center">
        <p className="text-red-500 font-bold">Blog introuvable</p>
        <p className="text-gray-500 text-sm">ID cherché : {id}</p>
      </div>
    );
  }

  return (
    // N'oublie pas le pt-24 pour que ta navbar ne cache pas le titre !
    <main className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-xl font-bold mb-4">Modifier le blog</h1>

      <form action={editBlog} className="flex flex-col gap-4 max-w-md">
        {/* L'input caché reste tel quel */}
        <input type="hidden" name="id" value={post.id} />

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Titre</label>
          <input
            type="text"
            name="title"
            defaultValue={post.title}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Contenu</label>
          <textarea
            name="content"
            defaultValue={post.content}
            className="border p-2 rounded h-32"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="done"
            defaultChecked={post.done === true}
          />
          Terminé ?
        </label>

        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
        >
          Mettre à jour
        </button>
      </form>
    </main>
  );
}
