import { ADDED, TOGGLED } from "./actionType"

export const added = (todoText) => {
    return {
        type: ADDED,
        payload : todoText
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload : todoId
    }
}