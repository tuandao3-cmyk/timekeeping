import axios from 'axios';

import { API_CONFIG } from './config';
import { Page } from '@/type/page.type';

export const getNews = async (params: typeof Page) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.api_url}${API_CONFIG.news}`,
      {
        params: params,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getNewsDetail = async (id: string) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.api_url}${API_CONFIG.news}/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
