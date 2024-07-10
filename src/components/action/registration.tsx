import { fakeRegister } from '@/utils/fakeRegister';
import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import Typography from '../ui/typography';
import TextField from '../layouts/textField';
import Button from '../ui/button';


const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const success = await fakeRegister(username, password);

    if (success) {
      alert('Registration Successful');
      navigate('/system/auth/login');
    } else {
      alert('Username already exists');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Typography variant="h2" className="text-center mb-6">Registration</Typography>
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
              Register
            </Button>
            <Link to="/system/auth/login" className="w-full">
              <Button variant="primary" className="w-full">
                Already have an account? Click here!
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
