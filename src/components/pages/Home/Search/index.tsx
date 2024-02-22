import { ISearchProps } from '@/interfaces/ISearchProps';

import { SearchButton, SearchField, SearchFieldWrapper } from './styled';

const Search = ({
  onFieldChange,
  onKeyDown,
  onSearchClick,
  isError,
  value,
}: ISearchProps): JSX.Element => (
  <SearchFieldWrapper>
    <SearchField
      placeholder="Enter the book name..."
      fullWidth
      size="small"
      onChange={onFieldChange}
      onKeyDown={onKeyDown}
      error={isError}
      helperText={isError ? 'Can not be empty.' : ''}
    >
      {value}
    </SearchField>
    <SearchButton
      variant="contained"
      sx={{ backgroundColor: 'rgba(0, 0, 0)' }}
      onClick={onSearchClick}
    >
      Search
    </SearchButton>
  </SearchFieldWrapper>
);

export default Search;
