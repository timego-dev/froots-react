import {
  AlbumList,
  AlbumDetail,
} from '../pages';
import { FC } from 'react';

interface IRoute {
  path: string;
  element: FC;
  label: string;
}

export const ROUTES = {
  ALBUM: {
    LIST: '/albums',
    DETAIL_BASE: '/albums/:id',
    DETAIL: (id: string) => `/albums/${id}`,
  },
};

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.ALBUM.LIST,
    element: AlbumList,
    label: 'Albums'
  },
  {
    path: ROUTES.ALBUM.DETAIL_BASE,
    element: AlbumDetail,
    label: 'Album Detail'
  },
];
