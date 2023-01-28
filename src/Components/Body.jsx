import TaskTemplate from "./TaskTemplate";

const Body = ({ tasks, setTasks }) => {
  let taskTemplate = tasks.map((task) => {
    return (
      <div key={task.id}>
        <TaskTemplate
          task={task.texts}
          id={task.id}
          tasks={tasks}
          setTasks={setTasks}
          completed={task.completed}
        />
      </div>
    );
  });

  return (
    <div className="bg-gray-900 text-white py-[85px] min-h-screen">
      {taskTemplate}
    </div>
  );
};

export default Body;
