import { SearchButton, SearchField, SearchFieldWrapper } from './styled';

export interface ISearchProps {
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
