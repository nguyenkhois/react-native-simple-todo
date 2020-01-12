import { ADD_TASK, CHECKED, REMOVE_TASK, REMOVE_TASK_COMPLETED } from "../../helpers/types";

export const todoActions = {
    addTask: (newTask) => ({ type: ADD_TASK, payload: newTask }),
    setDone: (taskId) => ({ type: CHECKED, payload: taskId }),
    removeTask: (taskId) => ({ type: REMOVE_TASK, payload: taskId }),
    removeTaskCompleted: () => ({ type: REMOVE_TASK_COMPLETED })
};
