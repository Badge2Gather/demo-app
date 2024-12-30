import { List, Paper, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onEdit }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography color="text.secondary">
          할 일이 없습니다. 새로운 할 일을 추가해보세요!
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
