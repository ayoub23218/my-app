import { createTask, getTasks } from "../lib/tasks";

export default async function Blog() {
  const tasks = await getTasks();
  return (
    <>
      <h2 className="text-center text-[2rem] mt-15">Mon CV</h2>
      <form action={createTask}>
        <label>
          title: <input name="title" />
        </label>
        <label>
          description: <textarea name="description" />
        </label>
        <button>Submit</button>
      </form>
      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {tasks.map((task) => (
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] min-[700px]:odd:last:col-span-2">
            <h3 className="mb-[0.6rem] text-xl font-semibold">{task.title}</h3>
            <p className="text-[0.95rem] text-[#444] leading-normal">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
