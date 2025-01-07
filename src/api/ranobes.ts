import { GET_RANOBE, GET_TOP } from '../constants/url';
import { Ranobe, RanobeTop } from '../types/ranobe';
import api from './axios';

export const getRanobes = () => {
  return api.get<RanobeTop[]>(`${GET_RANOBE}${GET_TOP}`);
};

export const getTopRanobes = () => {
  return api.get<Ranobe[]>(`${GET_RANOBE}`);
};
