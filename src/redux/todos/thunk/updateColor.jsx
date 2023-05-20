import axios from 'axios';
import { colorChange } from '../actions';

const updateColor = (todoId, color) => {
    return async (dispatch) => {
        try {
            const res = await axios.patch(`http://localhost:9000/todos/${todoId}`, {
                color: color
            }, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            const todo = res.data;
            dispatch(colorChange(todo.id, todo.color));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default updateColor;
