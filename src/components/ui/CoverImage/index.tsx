import { Box } from '@mui/material';

import noCoverImage from '@/assets/img/no-image.png';

import { ICoverImageProps } from './interfaces';

const CoverImage = ({ title, coverUrl }: ICoverImageProps): JSX.Element => {
  return coverUrl ? (
    <Box
      component="img"
      sx={{ width: '100%', height: '100%', objectFit: 'fill' }}
      alt={title}
      src={coverUrl}
    />
  ) : (
    <Box
      component="img"
      sx={{ width: '100%', height: '100%', objectFit: 'fill' }}
      alt={title}
      src={noCoverImage}
    />
  );
};
export default CoverImage;
