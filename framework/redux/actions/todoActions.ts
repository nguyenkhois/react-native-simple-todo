import { ADD_TASK, CHECKED, REMOVE_TASK, REMOVE_TASK_COMPLETED } from "../../constants/redux";
import { Task } from '../../types/';

export const todoActions = {
    addTask: (newTask: Task) => ({ type: ADD_TASK, payload: newTask }),
    setDone: (taskId: number) => ({ type: CHECKED, payload: taskId }),
    removeTask: (taskId: number) => ({ type: REMOVE_TASK, payload: taskId }),
    removeTaskCompleted: () => ({ type: REMOVE_TASK_COMPLETED })
};
