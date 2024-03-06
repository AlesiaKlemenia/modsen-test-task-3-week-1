import { Typography } from '@mui/material';

import FilterBar from '@/pages/Home/FilterBar';
import Search from '@/pages/Home/Search';
import { ISearchBarProps } from '@/pages/Home/SearchBar/interfaces';
import { FormBox, SearchField } from '@/pages/Home/SearchBar/styled';

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
      <Typography variant="h1">Search for books</Typography>
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
