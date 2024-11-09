import axios from 'axios';

import { API_CONFIG } from './config';
import { Page } from '@/type/page.type';

export const getReports = async (params: typeof Page) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.api_url}${API_CONFIG.report}`,
      {
        params: params,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
