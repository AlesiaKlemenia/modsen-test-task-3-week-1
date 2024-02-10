import { SearchField, SearchButton, SearchFieldWrapper } from './styled';

interface ISearchProps {
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onSearchClick: () => void;
  isError: boolean;
  value: string;
}

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
