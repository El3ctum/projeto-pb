import { fakeLogin } from '@/utils/fakeAuth';
import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import Typography from '../ui/typography';
import TextField from '../layouts/textField';
import Button from '../ui/button';


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await fakeLogin(username, password);

    if (success) {
      navigate('/user/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Typography variant="h2" className="text-center mb-6">Login</Typography>
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <TextField
              label="Username"
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <Button type="submit" variant="primary" className="w-full">
              Login
            </Button>
            <Link to="/system/auth/register" className="w-full">
              <Button variant="primary" className="w-full">
                Don't have a registration? Click here!
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
