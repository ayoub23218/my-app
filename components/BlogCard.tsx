type TaskProps = {
  id: string;
  title: string;
  content: string;
  done: boolean | null;
};

type BlogCardProps = {
  task: TaskProps;
  editAction: (formData: FormData) => Promise<void>;
  deleteAction: (id: string) => Promise<void>;
};

export default function BlogCard(props: BlogCardProps) {
  const deleteWithId = props.deleteAction.bind(null, props.task.id);

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg min-[700px]:odd:last:col-span-2 relative">
      <input
        type="checkbox"
        id={`edit-${props.task.id}`}
        className="peer hidden"
      />

      <div className="block peer-checked:hidden">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 leading-snug pr-4">
            {props.task.title}
          </h3>

          <div className="flex gap-2 shrink-0">
            <label
              htmlFor={`edit-${props.task.id}`}
              className="cursor-pointer text-gray-400 hover:text-blue-600 p-1 hover:bg-blue-50 rounded transition"
              title="Modifier"
            >
              ✎
            </label>

            <form action={deleteWithId}>
              <button
                type="submit"
                className="text-gray-400 hover:text-red-600 p-1 hover:bg-red-50 rounded transition leading-none"
                title="Supprimer"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {props.task.content}
        </p>
        {props.task.done && (
          <span className="inline-block mt-3 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            Terminé
          </span>
        )}
      </div>

      <form
        action={props.editAction}
        className="hidden peer-checked:flex flex-col gap-3"
      >
        <input type="hidden" name="id" value={props.task.id} />
        <input
          name="title"
          defaultValue={props.task.title}
          className="w-full font-bold text-gray-800 border-b-2 border-blue-500 focus:outline-none py-1 bg-blue-50/30"
          placeholder="Titre"
        />
        <textarea
          name="content"
          defaultValue={props.task.content}
          rows={4}
          className="w-full text-sm text-gray-600 border rounded p-2 focus:outline-none focus:border-blue-500 resize-none bg-gray-50"
          placeholder="Contenu"
        />
        <div className="flex justify-between items-center mt-2">
          <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
            <input
              type="checkbox"
              name="done"
              defaultChecked={props.task.done || false}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            Terminé
          </label>

          <div className="flex gap-2">
            <label
              htmlFor={`edit-${props.task.id}`}
              className="cursor-pointer text-xs px-3 py-1.5 rounded text-gray-600 hover:bg-gray-100 border border-transparent hover:border-gray-200"
            >
              Annuler
            </label>

            <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded font-medium hover:bg-green-700 shadow-sm transition-colors">
              Enregistrer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
