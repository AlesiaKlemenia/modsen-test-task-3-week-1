import { SelectChangeEvent } from '@mui/material';

import { ISelectItem } from '@/interfaces/ISelectItem';

export interface IFilterSelectProps {
  label: string;
  items: ISelectItem[];
  value: string;
  onSelectChange: (e: SelectChangeEvent<unknown>) => void;
}
