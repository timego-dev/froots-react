import { ENDPOINTS } from '../constants';
import { IGetPhotoParams } from '../interfaces';
import { Http } from '../utils';

const readAll = (params?: IGetPhotoParams): Promise<any> => {
  return Http.get(ENDPOINTS.PHOTO.BASE, params);
};

const getById = (id: number): Promise<any> => {
  return Http.get(ENDPOINTS.PHOTO.ID(id));
};

export const PhotoApi = {
  readAll,
  getById,
};
