import React from 'react';
import { Box, Pagination } from '@mui/material';
import { SearchPaginationProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const SearchPagination: React.FC<SearchPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: LAYOUT_CONSTANTS.SPACING.LG }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default SearchPagination;
