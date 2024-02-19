import { SelectChangeEvent } from '@mui/material';

export interface IFilterBarProps {
  category: string;
  onCategorySelectChange: (e: SelectChangeEvent<unknown>) => void;
  sort: string;
  onSortingSelectChange: (e: SelectChangeEvent<unknown>) => void;
}
