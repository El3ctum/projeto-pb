import { Item, fakeData } from './fakeList';

let lastId = 3;

export const fakeCreate = async (name: string): Promise<Item> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItem = { id: ++lastId, name };
      fakeData.push(newItem);
      resolve(newItem);
    }, 1000);
  });
};
