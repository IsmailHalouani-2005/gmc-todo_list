import { TASK_ADD, TASK_EDIT } from "../constants/actionTypes";

const initialState = {
    task: [
        {
            id: 1,
            text: 'Do the dishes',
            type: false
        }
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD:
            return {
                task: [...state.task, action.payload]
            }
        case TASK_EDIT:
            return {
                ...state,
                todo: state.todo.map(e =>  {
                    if (e.id !== action.payload) {
                        return e
                    } 
                    return {
                        ...e,
                        text: action.payload.text
                    }
                })
            }
        default:
            return state
    }
}

export default reducer