    import { TASK_ADD, TASK_EDIT } from "../constants/actionTypes";

export const addTask = newTask => {
    return {
        type: TASK_ADD,
        payload: newTask
    }
}

export const editTask = theTask => {
    return {
        type: TASK_EDIT,
        payload: theTask
    }
}