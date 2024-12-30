import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import { Todo as TodoType } from '../types/todo';

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        할 일 목록
      </Typography>
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
};

export default Todo;
