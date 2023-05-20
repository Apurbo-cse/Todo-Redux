import axios from 'axios';
import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        try {
            const res = await axios.patch(`http://localhost:9000/todos/${todoId}`, {
                completed: !currentStatus
            }, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            const todo = res.data;
            dispatch(toggled(todo.id));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default updateStatus;
