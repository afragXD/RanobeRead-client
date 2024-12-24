import { Ranobe } from '../types/ranobe';
import api from './axios';

export const getRanobes = (url: string) => {
  return api.get<Ranobe[]>(url);
};
