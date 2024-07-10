type User = {
    username: string;
    password: string;
  };
  
  const fakeUser: User = {
    username: 'davi_vieira',
    password: 'senha',
  };
  
  export const fakeLogin = async (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === fakeUser.username && password === fakeUser.password) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };
  