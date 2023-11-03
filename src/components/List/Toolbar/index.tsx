import * as S from './styles';
import { Add } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ListToolbarProps {
  title?: string;
  isLoading: boolean;
  onNew?: () => void;
}

const ListToolbar: FC<ListToolbarProps> = ({ title, isLoading, onNew }) => {
  return (
    <S.ListToolbar>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Stack direction="row" spacing={2}>
        {onNew && (
          <IconButton disabled={isLoading} onClick={onNew}>
            <Add />
          </IconButton>
        )}
      </Stack>
    </S.ListToolbar>
  );
};

export default ListToolbar;
