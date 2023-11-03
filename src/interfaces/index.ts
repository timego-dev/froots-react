export interface IGetPhotoParams {
  albumId?: string;
}

export interface IGetAlbumParams {
  userId?: string;
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

export interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
