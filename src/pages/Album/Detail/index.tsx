import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, CircularProgress } from '@mui/material';
import { PhotoGrid } from '../../../components';
import { AlbumApi, PhotoApi } from '../../../apis';
import { IAlbum, IPhoto } from '../../../interfaces';
import { Content } from './styles';

export const AlbumDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [album, setAlbum] = useState<IAlbum>();
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const fetchPhotos = () => {
    setIsLoading(true);
    PhotoApi.readAll({ albumId: id })
      .then((res) => {
        setPhotos(res);
      })
      .catch((err) => {
        enqueueSnackbar(err.msg, { variant: 'error' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchAlbum = () => {
    setIsLoading(true);
    if (id) {
      AlbumApi.getById(id)
        .then((res) => {
          setAlbum(res);
        })
        .catch((err) => {
          enqueueSnackbar(err.msg, { variant: 'error' });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchAlbum();
    fetchPhotos();
  }, []);

  return (
    <Content>
      {isLoading ? (
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : <PhotoGrid title={album?.title} data={photos} />}
    </Content>
  );
};
