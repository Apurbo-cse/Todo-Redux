import axios from 'axios';
import { deleted } from '../actions';

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        try {
             await axios.delete(`http://localhost:9000/todos/${todoId}`, {
                color: color
            });
            dispatch(deleted(todoId));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default deleteTodo;
