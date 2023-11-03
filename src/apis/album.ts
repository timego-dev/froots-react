import { ENDPOINTS } from '../constants';
import { IGetAlbumParams, IGetPhotoParams } from '../interfaces';
import { Http } from '../utils';

const readAll = (params?: IGetAlbumParams): Promise<any> => {
  return Http.get(ENDPOINTS.ALBUM.BASE, params);
};

const getById = (id: string): Promise<any> => {
  return Http.get(ENDPOINTS.ALBUM.ID(id));
};

export const AlbumApi = {
  readAll,
  getById,
};
