import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { IPhoto } from '../../interfaces';
import { ROUTES } from '../../constants';

interface IPhotoGridProps {
  title?: string;
  data: IPhoto[];
}

export const PhotoGrid = ({
  title = '',
  data = [],
}: IPhotoGridProps) => {
  return (
    <ImageList cols={8}>
      <ImageListItem key="Subheader" cols={8}>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{ title }</Typography>
          <Link to={ROUTES.ALBUM.LIST}>Albums</Link>
        </Stack>
      </ImageListItem>
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
