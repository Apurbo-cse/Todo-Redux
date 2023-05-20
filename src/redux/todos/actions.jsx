import { ADDED } from "./actionType"

export const added = (todoText) => {
    return {
        type: ADDED,
        payload : todoText
    }
}