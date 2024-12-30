import { useState, KeyboardEvent } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="새로운 할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="할 일 추가"
        onClick={handleSubmit}
      >
        <Add />
      </IconButton>
    </Paper>
  );
};

export default TodoInput;
