import { useState } from 'react';
import { Box, Paper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button, TextField } from '../common';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(8),
}));

const AuthForm = ({ type, onSubmit, isLoading = false }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'register' && { name: '', confirmPassword: '' }),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다';
    }

    if (type === 'register') {
      if (!formData.name) {
        newErrors.name = '이름을 입력해주세요';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 에러 메시지 초기화
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <FormContainer elevation={3}>
      <Typography variant="h5" align="center" gutterBottom>
        {type === 'login' ? '로그인' : '회원가입'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {type === 'register' && (
            <TextField
              label="이름"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
          )}
          <TextField
            label="이메일"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            label="비밀번호"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />
          {type === 'register' && (
            <TextField
              label="비밀번호 확인"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              fullWidth
            />
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
          >
            {type === 'login' ? '로그인' : '회원가입'}
          </Button>
        </Stack>
      </Box>
    </FormContainer>
  );
};

export default AuthForm;
