import { useNavigate } from 'react-router-dom';
import { Container, Link as MuiLink, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginInput } from '../types/auth';
import AuthForm from '../components/auth/AuthForm';
import { setCredentials } from '../features/auth/authSlice';
import { LoadingSpinner, Snackbar } from '../components/common';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginInput) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // TODO: 실제 API 연동 시 대체
      // const response = await loginApi(data);
      const mockResponse = {
        user: {
          id: '1',
          email: data.email,
          name: '테스트 사용자',
        },
        token: 'mock-jwt-token',
      };

      dispatch(setCredentials(mockResponse));
      navigate('/todos');
    } catch (err) {
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <Container maxWidth="sm">
      <AuthForm type="login" onSubmit={handleLogin} isLoading={isLoading} />
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="textSecondary">
          계정이 없으신가요?{' '}
          <MuiLink component={Link} to="/register">
            회원가입
          </MuiLink>
        </Typography>
      </Box>
      <Snackbar
        open={!!error}
        message={error || ''}
        severity="error"
        onClose={() => setError(null)}
      />
    </Container>
  );
};

export default Login;
