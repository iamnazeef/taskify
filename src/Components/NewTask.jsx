import AddIcon from "../assets/icons/AddIcon";

const NewTask = ({ data, setData, tasks, setTasks }) => {
  const handleAddTask = () => {
    setTasks([
      {
        texts: data,
        completed: false,
        id: Math.random() * 1000,
      },
      ...tasks,
    ]);
    setData("");
  };

  return (
    <div className="bg-gray-800 fixed bottom-0 text-white w-full px-3 py-5">
      <div className="flex items-center justify-center space-x-3 w-full max-w-[375px] mx-auto">
        <input
          type="text"
          className="bg-gray-700 rounded-full w-full shadow-sm"
          placeholder="New Task"
          value={data}
          onChange={(event) => setData(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleAddTask();
          }}
        />
        <button
          className="bg-gray-700 rounded-full p-[0.65rem] shadow-md hover:bg-gray-600"
          onClick={data ? handleAddTask : null}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default NewTask;
