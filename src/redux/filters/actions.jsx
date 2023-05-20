import { COLOR, STATUS } from "./actionType"

export const colorChange = (color, type) => {
    return {
        type: COLOR,
        payload : {
            color, type
        }
    }
}

export const statusChange = (status) => {
    return {
        type: STATUS,
        payload : status
    }
}