
import { ToDo } from "./ToDo";

export function ToDoList({taskList, onDelete, updateTask, onEdit}){

return(
    <>
    {
    taskList.map((el)=>{
        return <ToDo 
        key={el.id}  
        task={el.task} 
        isCompleted={el.isCompleted} 
        onDelete={()=>onDelete(el.id)} 
        updateTask={(()=>updateTask(el.id))}
        onEdit={(text)=>{onEdit(el.id, text)}}/>
    })
}
    
    </>
)
}
