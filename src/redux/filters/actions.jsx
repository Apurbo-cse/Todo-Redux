import { COLOR } from "./actionType"

export const color = (color, type) => {
    return {
        type: COLOR,
        payload : {
            color, type
        }
    }
}
