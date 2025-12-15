import { ReactNode } from "react";
type InputFormProps = {
  title: string;
  name: string;
  placeholder: string;
};
function InputForm(props: InputFormProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {props.title}
      </label>
      <input
        name={props.name}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={props.placeholder}
      />
    </div>
  );
}
type TeaxtareaFormProps = {
  content: string;
  name: string;
  placeholder: string;
};
function TextareaForm(props: TeaxtareaFormProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-600">
        {props.content}
      </label>
      <textarea
        name={props.name}
        required
        rows={3}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={props.placeholder}
      />
    </div>
  );
}

type BlogFormProps = {
  createAction: (formData: FormData) => Promise<void>;
};

export default function BlogForm(props: BlogFormProps) {
  return (
    <form
      action={props.createAction}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12 space-y-5"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Ajouter une section
      </h3>
      <InputForm
        title="Titre"
        name="title"
        placeholder="Ex: Expérience - Développeur"
      />
      <TextareaForm
        content="Contenu"
        name="content"
        placeholder="Description..."
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
        Ajouter
      </button>
    </form>
  );
}
