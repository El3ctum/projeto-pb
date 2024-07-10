export type Item = {
  id: number;
  name: string;
};

export const fakeData: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export const fakeList = async (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 500);
  });
};
