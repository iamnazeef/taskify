import DeleteIcon from "../assets/icons/DeleteIcon";
import DoubleCheckIcon from "../assets/icons/DoubleCheckIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import EditIcon from "../assets/icons/EditIcon";
import EditOffIcon from "../assets/icons/EditOffIcon";
import { useState } from "react";
import { useRef } from "react";

const TaskTemplate = ({ task, id, tasks, setTasks, completed }) => {
  const [edit, setEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  //DELETE
  const handleDelete = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  //CHECKED
  const handleChecked = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  //UPDATE TASK
  const saveUpdatedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            texts: updatedTask,
          };
        }
        return task;
      })
    );
  };

  return (
    <section className="bg-gray-800 p-3 rounded-xl flex items-center min-h-[74px] mb-4 w-[90%] max-w-[335px] tablet:max-w-[390px] laptop:max-w-[400px] mx-auto shadow-sm">
      <div className="checkIcon w-[15%] flex items-center justify-center">
        <button
          className="rounded-full p-1 cursor-pointer hover:bg-gray-700 transition-colors delay-[15ms] ease-linear"
          onClick={() => handleChecked(id)}
          aria-label="Button to confirm task is done"
        >
          {completed ? <DoubleCheckIcon /> : <CheckIcon />}
        </button>
      </div>
      <div className="task w-[55%] text-sm flex items-center justify-center">
        {edit ? (
          <input
            type="text"
            className="text-sm w-full tablet:text-base laptop:text-lg break-words break-normal rounded-full text-gray-200 bg-gray-800"
            value={updatedTask}
            onChange={(event) => setUpdatedTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                saveUpdatedTask(id, updatedTask);
                setEdit((prev) => !prev);
              }
            }}
            autoFocus
          />
        ) : (
          <h2
            className={`text-sm w-full tablet:text-base laptop:text-lg text-center break-words break-normal ${
              completed ? "line-through text-gray-400" : null
            }`}
          >
            {task}
          </h2>
        )}
      </div>
      <div className="editIcon w-[15%] flex items-center justify-center">
        <button
          className="rounded-full p-1 cursor-pointer hover:bg-gray-700 transition-colors delay-[15ms] ease-linear"
          onClick={() => {
            if (!edit) {
              setEdit((prev) => !prev);
            } else {
              saveUpdatedTask(id, updatedTask);
              setEdit((prev) => !prev);
            }
          }}
          aria-label="update task"
        >
          {edit ? <EditOffIcon /> : <EditIcon />}
        </button>
      </div>
      <div className="deleteIcon w-[15%] flex items-center justify-center">
        <button
          className="rounded-full p-1 cursor-pointer hover:bg-gray-700 transition-colors delay-[15ms] ease-linear"
          onClick={() => handleDelete(id)}
          aria-label="Button to delete task"
        >
          <DeleteIcon />
        </button>
      </div>
    </section>
  );
};

export default TaskTemplate;
