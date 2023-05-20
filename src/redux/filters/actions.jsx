import { COLOR, STATUS } from "./actionType"

export const color = (color, type) => {
    return {
        type: COLOR,
        payload : {
            color, type
        }
    }
}

export const status = (status) => {
    return {
        type: STATUS,
        payload : status
    }
}