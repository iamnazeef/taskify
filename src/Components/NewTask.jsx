const NewTask = (props) => {
  const handleChange = (e) => {
    props.setData(e.target.value);
  };

  const handleClick = () => {
    props.setTasks([
      {
        texts: props.data,
        completed: false,
        id: Math.random() * 1000,
      },
      ...props.tasks,
    ]);
    props.setData("");
  };

  return (
    <div className="bg-gray-800 sticky bottom-0 text-white font-Poppins py-5 w-full text-center flex justify-center items-center">
      <input
        type="text"
        className="py-2 px-4 font-thin font-Poppins tracking-wide text-md rounded-full bg-gray-700 placeholder:text-gray-400"
        placeholder="Set tasks..."
        onChange={handleChange}
        value={props.data}
      />
      <button
        onClick={
          props.data
            ? handleClick
            : () => {
                console.log("enter a task");
              }
        }
        className="ml-4 px-6 py-2 rounded-full text-ms border-2 border-gray-600 hover:bg-gray-700"
      >
        <div className="flex font-semibold text-gray-300">Add</div>
      </button>
    </div>
  );
};

export default NewTask;
