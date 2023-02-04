import TaskTemplate from "./TaskTemplate";

const Body = ({ tasks, setTasks }) => {
  let taskTemplate = tasks.map((task) => {
    return (
      <section key={task.id}>
        <TaskTemplate
          task={task.texts}
          id={task.id}
          tasks={tasks}
          setTasks={setTasks}
          completed={task.completed}
        />
      </section>
    );
  });

  return (
    <main className="bg-gray-900 text-white py-[85px] font-Poppins min-h-screen">
      {taskTemplate}
    </main>
  );
};

export default Body;
