import { ADD_TASK, CHECKED, REMOVE_TASK, REMOVE_TASK_COMPLETED } from "../../constants/redux";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = action.payload;

            return ({
                ...state,
                tasks: {
                    ...state.tasks,
                    ...newTask
                }
            });

        case CHECKED:
            const checkedTaskId = action.payload;

            if (state.tasks[checkedTaskId]){
                state.tasks.taskId.isDone = true;
            }

            return state;

        case REMOVE_TASK:
            const removedTaskId = action.payload;

            if (state.tasks[removedTaskId]){
                delete state.tasks[removedTaskId]; // Mutating method
            }

            return state;

        case REMOVE_TASK_COMPLETED:
            // Do stuff

            return state;

        default:
            return state;
    }
};
