import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Task = {
    id: number;
    text: string;
    isComplete: boolean;
}

type TaskState = {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState, 
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload)
        },
        changeIsComplete(state, action: PayloadAction<number>) {
            const changedIsComplete = state.tasks.find(task => task.id === action.payload);
            if(changedIsComplete) {
                changedIsComplete.isComplete = !changedIsComplete.isComplete;
            }
        },
        removeTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const {addTask, changeIsComplete, removeTask} = taskSlice.actions;

export default taskSlice.reducer;