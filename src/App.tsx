import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from './Table';
import { constants } from './constants';

export default function DataTable() {
  const [pageInfo, setpageInfo] = useState([constants.INITIAL_STATE]);
  // HANDLING PAGE CHANGES AND MAINTAING BACK AND FORWARD STATE
  const handlePageChange = (startCursor: string, endCursor: string, movement: number) => {
    setpageInfo([...pageInfo, {
      currentCursor: endCursor,
      previousCursor: startCursor,
      movement: movement
    }]);
  };

  return (
    <Box
      sx={{
        '& .header-class': {
          backgroundColor: constants.BACKGROUND_COLOR,
          color: constants.COLOR
        },
      }}
    >
      <Table handlePageChange={handlePageChange} pageInfo={pageInfo} />
    </Box>
  );
}