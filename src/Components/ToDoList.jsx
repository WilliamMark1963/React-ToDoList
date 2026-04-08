import { useState } from "react";
import { ToDo } from "./ToDo";

export function ToDoList({taskList, onDelete}){

return(
    <>
    {
    taskList.map((el)=>{
        return <ToDo key={el.id}  task={el.task} isComplete={el.isCompleted} onDelete={()=>onDelete(el.id)}/>
    })
}
    
    </>

)
}
