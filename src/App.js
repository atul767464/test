import "./App.css";

const App = () => {
  let data = {
    projetcName: "Build-Car",
    startDate: "Thu Nov 05 2020 11:20:12 GMT+0530 (India Standard Time)",
    endDate: "Thu Nov 15 2020 11:20:12 GMT+0530 (India Standard Time)",
    root: {
      task1: { name: "BuildFrame", prevTask: "", nextTask: "task2" },
      task2: { name: "BuildBody", prevTask: "task1", nextTask: "task4" },
      task3: { name: "TestCar", prevTask: "task4", nextTask: "" },
      task4: { name: "FitTyre", prevTask: "task2", nextTask: "task3" },
    },
  };
  /* 
  1.BuildFrame
  2.BuildBody
  3.FitTyre
  4.TestCar
  */
  let task = data.root.task1;
  let taskList = [];
  while (task.nextTask !== "") {
    taskList.push({ ...task, taskname: data.root[task.nextTask] || taskList.length });
    task = data.root[task.nextTask];
  }
  taskList.push({ ...task, taskname: data.root[task.nextTask] || taskList.length });
  return (
    <div className="App">
      <h1>{data.projetcName}</h1>
      <h4>
        Start Date:<span> {new Date(data.startDate).toLocaleDateString()}</span>
      </h4>
      <h4>
        End Date: <span>{new Date(data.endDate).toLocaleDateString()}</span>
      </h4>
      <div className="task-list">
        {taskList.map((task, i) => {
          return (
            <>
              <div className="task-item" key={task.name}>
                <p className="task-number">{typeof task.taskname == "number" ? "task" + task.taskname : task.taskname?.prevTask} </p>
                <p>{task.name}</p>
              </div>
              {i !== taskList.length - 1 && (
                <>
                  <div className="connector"></div>
                  <div className="arrow">&#8595; </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
