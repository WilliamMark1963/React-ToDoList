import { Trash2, Circle, CircleCheck, Pencil } from "lucide-react";
import { useState } from "react";

export function ToDo({ task, onDelete, isCompleted, updateTask, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);
  return (
    <div className=" w-87.5 md:w-105 border rounded-2xl flex items-start p-4 justify-between my-3 bg-white shadow-sm">
      <div className="flex flex-1 min-w-0 gap-2">
        {isCompleted ? (
          <CircleCheck
            className="text-green-500 size-7 shrink-0"
            onClick={updateTask}
          />
        ) : (
          <Circle
            className="text-green-500 size-7 shrink-0"
            onClick={updateTask}
          />
        )}
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setIsEditing(false);
              onEdit(editText);
            }}
            className="ml-2 border-b outline-none"
            autoFocus
          />
        ) : (
          <p
            className={`ml-2 text-lg wrap-break-words ${isCompleted ? "line-through" : ""} flex-1`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3 ml-3">
        <Pencil
          className="text-green-700 size-6 cursor-pointer  transition-all duration-500 hover:scale-110"
          onClick={() => setIsEditing(true)}
        />
        <Trash2
          className="text-red-700 size-6 cursor-pointer transition-all duration-500 hover:scale-110"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
