import axios from 'axios';
import { added } from "../actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:9000/todos', {
                text: todoText,
                completed: false
            }, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            const todo = res.data;
            dispatch(added(todo.text));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default addTodo;
