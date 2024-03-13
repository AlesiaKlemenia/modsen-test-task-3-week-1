import { Button } from '@mui/material';

import {
  NotFoundDescription,
  NotFoundTitle,
  NotFoundWrapper,
} from '@/pages/NotFound/styled';

const NotFound = (): JSX.Element => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle variant="h1">404</NotFoundTitle>
      <NotFoundDescription variant="h5" maxWidth="md">
        The page you’re looking for doesn’t exist.
      </NotFoundDescription>
      <Button variant="contained" size="large" href="/">
        Back Home
      </Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
