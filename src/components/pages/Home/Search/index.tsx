import { TextField } from '@mui/material';
import { SearchButton, SearchFieldWrapper } from './styled';

interface ISearchProps {
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  isError: boolean;
  value: string;
}

const Search = ({
  onFieldChange,
  onSearchClick,
  isError,
  value,
}: ISearchProps) => (
  <SearchFieldWrapper>
    <TextField
      placeholder="Enter the book name..."
      fullWidth
      onChange={onFieldChange}
      error={isError}
      helperText={isError ? 'Can not be empty.' : ''}
    >
      {value}
    </TextField>
    <SearchButton variant="outlined" onClick={onSearchClick}>
      Search
    </SearchButton>
  </SearchFieldWrapper>
);

export default Search;
