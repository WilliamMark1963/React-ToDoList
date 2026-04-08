export function Header(){

    return(<>
    <h2 className="text-3xl mb-5">Appka Do List</h2>
    <h3 className="text-2xl ">Operations that can be performed</h3>
    <ul className="flex my-3">
        <li className="ml-3 ">Add</li>
        <li className="ml-3 ">Delete</li>
        <li className="ml-3 ">Mark As Complete</li>
        <li className="ml-3 ">Update</li>
        </ul>
    </>)
}