import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  filters: {
    status: 'all' | 'completed' | 'active';
    priority: 'all' | 'HIGH' | 'MEDIUM' | 'LOW';
  };
  sort: {
    by: 'dueDate' | 'priority' | 'createdAt';
    order: 'asc' | 'desc';
  };
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
  filters: {
    status: 'all',
    priority: 'all',
  },
  sort: {
    by: 'createdAt',
    order: 'desc',
  },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<Partial<TodoState['filters']>>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSort: (state, action: PayloadAction<Partial<TodoState['sort']>>) => {
      state.sort = { ...state.sort, ...action.payload };
    },
  },
});

export const {
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  setLoading,
  setError,
  setFilters,
  setSort,
} = todoSlice.actions;
export default todoSlice.reducer;
