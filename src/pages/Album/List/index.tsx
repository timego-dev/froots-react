import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { TextField } from '@mui/material';
import { List } from '../../../components';
import { AlbumApi } from '../../../apis';
import { ROUTES } from '../../../constants';
import { IAlbum } from '../../../interfaces';
import { Content } from './styles';

export const AlbumList: FC = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>();

  const { enqueueSnackbar } = useSnackbar();

  const fetchAlbums = (userId?: string) => {
    setIsLoading(true);
    AlbumApi.readAll(userId ? { userId } : undefined)
      .then((res) => {
        setAlbums(res);
      })
      .catch((err) => {
        enqueueSnackbar(err.msg, { variant: 'error' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const columns = [
    {
      title: 'Id',
      field: 'id',
    },
    {
      title: 'User Id',
      field: 'userId',
    },
    {
      title: 'Title',
      field: 'title'
    },
  ];

  const handleRowClick = (row) => {
    navigate(ROUTES.ALBUM.DETAIL(row));
  };

  useEffect(() => {
    fetchAlbums(userId);
  }, [userId]);

  return (
    <Content>
      <TextField label="User" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <List
        data={albums}
        columns={columns}
        isLoading={isLoading}
        onRowClick={handleRowClick}
      />
    </Content>
  );
};
