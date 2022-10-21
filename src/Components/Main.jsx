import Task from "./Task";

const Main = (props) => {
  let task = props.tasks.map((e) => {
    return (
      <div key={e.id}>
        <Task
          task={e.texts}
          id={e.id}
          tasks={props.tasks}
          setTasks={props.setTasks}
          completed={e.completed}
        />
      </div>
    );
  });

  return (
    <div className="bg-gray-900 min-h-[523px] text-white font-Poppins p-7 lg:px-[35%] scrollbar-hide">
      {task}
    </div>
  );
};

export default Main;
