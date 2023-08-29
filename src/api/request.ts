import { API_PATH } from '../constants/path';

const request = async (url: string, requestOptions?: RequestInit) => {
  try {
    const response = await fetch(`${API_PATH.BASE}${url}`, {
      ...requestOptions,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    const parsedResponse = await response.json();
    throw new Error(parsedResponse.message);
  } catch (err) {
    console.error('Request error: ', err);
  }
};

export default request;
