import { useState } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  TextField,
} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label={isEditing ? '저장' : '수정'}
            onClick={handleEdit}
            sx={{ mr: 1 }}
          >
            {isEditing ? <Save /> : <Edit />}
          </IconButton>
          {isEditing ? (
            <IconButton edge="end" aria-label="취소" onClick={handleCancel}>
              <Cancel />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              aria-label="삭제"
              onClick={() => onDelete(id)}
            >
              <Delete />
            </IconButton>
          )}
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => onToggle(id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        {isEditing ? (
          <TextField
            fullWidth
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            size="small"
            autoFocus
          />
        ) : (
          <ListItemText
            primary={text}
            sx={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? 'text.secondary' : 'text.primary',
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
