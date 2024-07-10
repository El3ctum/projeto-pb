type User = {
    username: string;
    password: string;
  };
  
  const users: User[] = [];
  
  export const fakeRegister = async (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExists = users.some((user) => user.username === username);
        if (userExists) {
          resolve(false);
        } else {
          users.push({ username, password });
          resolve(true);
        }
      }, 1000);
    });
  };
  