import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../redux/filters/actions";

const numberOfTodos = (no_of_todos) =>{
    switch (no_of_todos){
        case 0:
            return 'No task';
        case 1:
            return '1 task';
        default:
            return `${no_of_todos} tasks`;
    }
}

export default function Footer() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters)
    const dispatch =useDispatch();
    const todosRemaining = todos.filter(todo => !todo.completed).length;

    const handelStatus = (status) =>{
        dispatch(statusChange(status))
    }

    const { status, color } = filters;

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => handelStatus('All')} className={`cursor-pointer ${status === 'All' && "font-bold"}`}>All</li>
                <li>|</li>
                <li onClick={() => handelStatus('Incomplete')} className={`cursor-pointer ${status === 'Incomplete' && "font-bold"}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => handelStatus('Complete')} className={`cursor-pointer ${status === 'Complete' && "font-bold"}`}>Complete</li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>
        </div>
    );
}
