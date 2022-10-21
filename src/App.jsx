import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import NewTask from "./Components/NewTask";
import { useState } from "react";
import { useEffect } from "react";

const getLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem("list"));
  if (list) {
    return list;
  } else {
    return [];
  }
};

function App() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <NavBar />
      <Main tasks={tasks} setTasks={setTasks} />
      <NewTask
        data={data}
        setData={setData}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
