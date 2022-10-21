import DeleteIcon from "../assets/delete-icon.svg";

const Task = (props) => {
  //DELETE
  const handleDelete = (id) => {
    props.setTasks(
      props.tasks.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const handleChecked = (id) => {
    props.setTasks(
      props.tasks.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            completed: !e.completed,
          };
        } else {
          return e;
        }
      })
    );
  };

  const theTask = (props) => {
    if (props.completed) {
      return (
        <h1 className="text-lg tracking-wider line-through text-gray-400">
          {props.task}
        </h1>
      );
    } else {
      return <h1 className="text-lg tracking-wider">{props.task}</h1>;
    }
  };

  return (
    <div className="bg-gray-800 p-5 rounded-xl flex relative justify-around min-h-[65px] max-h-[65px] mb-3">
      <div className="absolute left-5">
        <input
          type="checkbox"
          className="mr-3 rounded-full border-2 bg-gray-700 w-5 h-5 cursor-pointer"
          onChange={() => handleChecked(props.id)}
          checked={props.completed}
        />
      </div>
      {theTask(props)}
      <div className="absolute right-5">
        <button onClick={() => handleDelete(props.id)}>
          <img src={DeleteIcon} alt="delete task" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Task;
