import { ToDoList } from "./Components/ToDoList";
import { CirclePlus } from "lucide-react";

function App(){




  return(
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <h2 className="text-3xl mb-5">Appka Do List</h2>
      <div className=" flex">
      <input type="text" className="mr-4 border-b-2 outline-0 w-80" />
      <CirclePlus className="size-7 hover:text-olive-600"/>
      </div>


      <div>
        <ToDoList/>
      </div>

    </div>
  )
}

export default App;