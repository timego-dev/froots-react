import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_SERVER } from '../constants';

const http = axios.create({ baseURL: API_SERVER });

const request = (method: Method, url: string, options: AxiosRequestConfig) => {
  return http
    .request({
      ...options,
      method,
      url,
      headers: options.headers
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler);
};

const httpResponseHandler = (response: any) => {
  return response.data;
};

const httpErrorHandler = (err: any) => {
  const response = err?.response;
  const status = response?.status;
  if (response?.status === 401) {
    // eslint-disable-next-line no-throw-literal
    throw {
      msg: 'Unauthorized',
      status
    };
  }

  if (response?.status === 404) {
    // eslint-disable-next-line no-throw-literal
    throw {
      msg: 'User Not Found',
      status
    };
  }

  const data = response?.data;
  // eslint-disable-next-line no-throw-literal
  throw {
    msg: data?.msg || 'Network Error!',
    status
  };
};

export const Http = {
  get(url: string, params: any = {}, headers: any = {}) {
    return request('GET', url, { params, headers });
  },
  post(url: string, body: any = {}, onUploadProgress: any = {}, headers: any = {}) {
    return request('POST', url, { data: body, headers, onUploadProgress });
  },
  put(url: string, body: any = {}, headers: any = {}) {
    return request('PUT', url, { data: body, headers });
  },
  patch(url: string, body: any = {}, headers: any = {}) {
    return request('PATCH', url, { data: body, headers });
  },
  delete(url: string, body: any = {}, headers: any = {}) {
    return request('DELETE', url, { data: body, headers });
  }
};
