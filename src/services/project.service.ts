import axios from 'axios';

import { API_CONFIG } from './config';
import { Page } from '@/type/page.type';

export const getProjects = async (params: typeof Page) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.api_url}${API_CONFIG.project}`,
      {
        params: params,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDetailProject = async (id: string) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.api_url}${API_CONFIG.project}/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
