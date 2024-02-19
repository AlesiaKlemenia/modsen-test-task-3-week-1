import { Typography } from '@mui/material';

import FilterBar from '../FilterBar';
import Search from '../Search';
import { ISearchBarProps } from './interfaces';
import { FormBox, SearchField } from './styled';

const SearchBar = ({
  onFieldChange,
  onKeyDown,
  onSearchClick,
  isError,
  value,
  category,
  onCategorySelectChange,
  sort,
  onSortingSelectChange,
}: ISearchBarProps): JSX.Element => {
  return (
    <SearchField>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
      >
        Search for books
      </Typography>
      <FormBox>
        <Search
          onFieldChange={onFieldChange}
          onKeyDown={onKeyDown}
          onSearchClick={onSearchClick}
          isError={isError}
          value={value}
        />
        <FilterBar
          category={category}
          onCategorySelectChange={onCategorySelectChange}
          sort={sort}
          onSortingSelectChange={onSortingSelectChange}
        />
      </FormBox>
    </SearchField>
  );
};

export default SearchBar;
