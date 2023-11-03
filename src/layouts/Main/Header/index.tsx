import * as S from './style';
import { PowerSettingsNew } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MAIN_ROUTES } from '../../../constants';

const Header: FC = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const handleLogout = () => {
    console.log('logout');
  };

  const title = MAIN_ROUTES
    .find((route) => route.path === pathname || route.path.replace(':id', id || '') === pathname)?.label;

  return (
    <>
      <S.Header>
        <Typography variant="h4">{title}</Typography>
        <Stack direction="row" spacing={8}>
          <IconButton onClick={handleLogout}>
            <PowerSettingsNew />
          </IconButton>
        </Stack>
      </S.Header>
    </>
  );
};

export default Header;
