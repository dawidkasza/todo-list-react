import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        content: "Zrobić obiad",
        done: true,
      },
      {
        id: 2,
        content: "Nagrać filmik poradnika",
        done: false,
      },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },

    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },

    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
