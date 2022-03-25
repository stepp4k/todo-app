import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.list = action.payload
        },
        addTask: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        changeTaskStatus: (state, action) => {
            let currentTasks = [...state.list]
            const id = action.payload;
            for (let task of currentTasks) {
                if (task.id === id) {
                    task.done = !task.done
                }
            }
            state.list = currentTasks;
        },
        removeTask: (state, action) => {
            const id = action.payload
            state.list = state.list
                .filter(item => item.id !== id);
        },
        clearTasks: (state, action) => { 
            state.list = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTasks, addTask, changeTaskStatus, removeTask, clearTasks } = tasksSlice.actions

export default tasksSlice.reducer