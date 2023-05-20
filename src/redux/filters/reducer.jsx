import { COLOR, STATUS } from "./actionType";
import initialState from "./initialState";


const reducer = ( state =  initialState, action) => {
   switch (action.type) {
    case STATUS:
        return {
            ...state,
            status: action.payload
        }
    
    case COLOR:
        const {color, type} = action.payload;

        switch (type) {
            case 'added':
                return {
                    ...state,
                    colors: [
                        ...state.colors,
                        color
                    ]
                }
            
        case 'removed': 
            return {
                    ...state,
                    colors: state.colors.filter(exitingColor => 
                    exitingColor !== color)
                }
          
        default:
         return state
        }
        
   
    default:
        return state
   }
}

export default reducer;