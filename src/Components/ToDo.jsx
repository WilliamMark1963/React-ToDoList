import { Trash2, Circle, CircleCheck} from 'lucide-react';
import { useState } from 'react';
export function ToDO({task}){
    const [complete, setComplete] = useState(false)
    function handleComplete(){
        setComplete(!complete)
    }
    return (
    <div className="w-100  border rounded-2xl flex p-2 justify-between m-3">
        <div className='flex flex-1'>
            {
                complete ? <CircleCheck className="text-green-500 size-7  shrink-0" onClick={handleComplete}/> : <Circle className="text-green-500 size-7 shrink-0" onClick={handleComplete} />
            }
             {
                complete ?  <p className='text-left ml-2 text-lg line-through' >{task}</p> : <p className='text-left ml-2 text-lg' >{task}</p>
            }
      
        
        </div>
        <Trash2 className="text-red-700 size-7 stroke-[2.5px]" />
    </div>
    )
}