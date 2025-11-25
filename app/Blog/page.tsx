import { createTask, getTasks, deleteTask } from "../lib/tasks";

export default async function Blog() {
  const tasks = await getTasks();
  return (
    <>
      <h2 className="text-center text-[2rem] mt-15">Mon CV</h2>
      <form action={createTask}>
        <label className="block">
          title: <input className="border" name="title" />
        </label>
        <label>
          content: <textarea className="border block" name="description" />
        </label>
        <button className="border">Submit</button>
      </form>
      <div className="grid grid-cols-1 gap-6 min-[700px]:grid-cols-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] min-[700px]:odd:last:col-span-2"
          >
            <div className="flex justify-between items-start mb-[0.6rem]">
              <h3 className="text-xl font-semibold break-words pr-4">
                {task.title}
              </h3>

              <form action={deleteTask} className="shrink-0">
                <input type="hidden" name="id" value={task.id} />
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-700 text-lg font-bold px-2 py-1 rounded hover:bg-red-50 leading-none"
                >
                  ✕
                </button>
              </form>
            </div>
            <p className="text-[0.95rem] text-[#444] leading-normal">
              {task.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
