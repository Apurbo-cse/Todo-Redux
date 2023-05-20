import { ADDED, CLEAR, COLOR, COMPLETED, DELETED, TOGGLED } from "./actionType"

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

export const color = (todoId, color) => {
    return {
        type: COLOR,
        payload : {
             todoId , color
        }
    }
}


export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload :todoId 
    }
}

export const completed = () => {
    return {
        type: COMPLETED
    }
}

export const clear = () => {
    return {
        type: CLEAR
    }
}