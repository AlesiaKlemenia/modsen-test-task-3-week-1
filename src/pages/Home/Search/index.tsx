import { ISearchProps } from '@/interfaces/ISearchProps';
import {
  SearchButton,
  SearchField,
  SearchFieldWrapper,
} from '@/pages/Home/Search/styled';

const Search = ({
  onFieldChange,
  onKeyDown,
  onSearchClick,
  isError,
  value,
}: ISearchProps): JSX.Element => (
  <SearchFieldWrapper>
    <SearchField
      name="search-input-field"
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
    <SearchButton variant="contained" onClick={onSearchClick}>
      Search
    </SearchButton>
  </SearchFieldWrapper>
);

export default Search;
