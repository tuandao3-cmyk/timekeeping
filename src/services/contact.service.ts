import axios from 'axios';

import { API_CONFIG } from './config';
import { Page } from '@/type/page.type';

export const postContact = async (data: any) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.api_url}${API_CONFIG.contact}`,
      data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
