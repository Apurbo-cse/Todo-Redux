import axios from 'axios';
import { deleted } from '../actions';

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:9000/todos/${todoId}`);
            dispatch(deleted(todoId));
            
        } catch (error) {
            console.error(error);
        }
    }
}

export default deleteTodo;
