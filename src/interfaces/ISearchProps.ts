export interface ISearchProps {
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onSearchClick: () => void;
  isError: boolean;
  value: string;
}
