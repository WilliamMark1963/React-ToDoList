import { useState } from "react";
import { ToDoList } from "./Components/ToDoList";
import { CirclePlus } from "lucide-react";
import { Header } from "./Components/Header";

function App(){

  let defaultTasks = [
    {"id": 1,
      "task": "Clean Youre Brush🪥",
        "isCompleted": true
    },
    {"id": 2,
      "task": "Excersie for 10 Mins 💪",
        "isCompleted": false
    },
    {"id": 3,
      "task": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, obcaecati quis sed ea ratione dolorum nulla expedita nisi minima quisquam!",
        "isCompleted": true
    }
  ]
const [tasks,setTasks] = useState(defaultTasks);
const [msg, setMsg] = useState("");

function addTask(){
  if(!msg.trim()) return;
let newTask = {
  id: tasks.length>0? tasks[tasks.length-1].id + 1 : 1,
  task: msg,
  isCompleted: false
}
setTasks([...tasks, newTask])
setMsg("");
}
function deleteTask(id){
  const updatedTasks =  tasks.filter((item)=>item.id!=id)
  setTasks(updatedTasks)

}

function updateTask(id) {
const updated = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setTasks(updated);
}

function editTask(id, newText){
  const updated = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, task: newText };
      }
      return item;
    });

    setTasks(updated);
}


  return(
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <Header/>
      <div className=" flex">
      <input type="text" className="mr-4 border-b-2 outline-0 w-full max-w-[300px] sm:w-80" onChange={(e)=>{
            setMsg(e.target.value)
      }}  />
      <CirclePlus className="size-7 hover:text-blue-700 transition-all duration-500 hover:scale-110" onClick={addTask}/>
      </div>


      <div>
        <ToDoList 
        taskList={tasks} 
        onDelete={deleteTask} 
        updateTask={updateTask}
        onEdit={editTask}/>
      </div>

    </div>
  )
}

export default App;