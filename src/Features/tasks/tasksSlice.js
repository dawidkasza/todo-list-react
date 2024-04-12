import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
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

    fetchExampleTasks: (state) => {
      state.status = "loading";
    },

    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.status = "finish";
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectLoading = (state) =>
  selectTasksState(state).status === "finish";

export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
