import { Box, Typography } from '@mui/material';

const EmptySearchResult = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '50vw',
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <Typography variant="h3" textAlign="center" sx={{ margin: '48px' }}>
        It seems, nothing was found :(
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Typography variant="body1">What can you try to do?</Typography>
        <Typography variant="body2">
          - Сheck that you entered the correct request
        </Typography>
        <Typography variant="body2">- Start VPN</Typography>
      </Box>
    </Box>
  );
};

export default EmptySearchResult;
