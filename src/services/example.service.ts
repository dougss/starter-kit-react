import { api } from './api';

export const loadExample = async (): Promise<any> => {
  return await api.get('/entries').then(response => response.data);
};
