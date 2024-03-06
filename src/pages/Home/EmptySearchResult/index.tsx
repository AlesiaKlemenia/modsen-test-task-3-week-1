import { Typography } from '@mui/material';

import {
  NoResultsTitle,
  NoResultsWrapper,
  WhatCanYouTryToDoWrapper,
} from '@/pages/Home/EmptySearchResult/styled';

const EmptySearchResult = (): JSX.Element => {
  return (
    <NoResultsWrapper>
      <NoResultsTitle variant="h3">
        It seems, nothing was found :(
      </NoResultsTitle>
      <WhatCanYouTryToDoWrapper>
        <Typography variant="body1">What can you try to do?</Typography>
        <Typography variant="body2">
          - Сheck that you entered the correct request
        </Typography>
        <Typography variant="body2">- Start VPN</Typography>
      </WhatCanYouTryToDoWrapper>
    </NoResultsWrapper>
  );
};

export default EmptySearchResult;
