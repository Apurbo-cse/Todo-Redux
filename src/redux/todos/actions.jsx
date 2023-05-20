import { ADDED, CLEAR, COLOR, COMPLETED, DELETED, LOADED, TOGGLED } from "./actionType"

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload : todos
    }
}

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

export const colorChange = (todoId, color) => {
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