const setItem = (key: string, data: any) => {
  if (typeof data === 'object') {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
};

const getItem = (key: string, defaultValue: any = null) => {
  const item = localStorage.getItem(key);
  if (!item) return defaultValue;

  return item;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const storage = {
  setItem,
  getItem,
  removeItem
};
