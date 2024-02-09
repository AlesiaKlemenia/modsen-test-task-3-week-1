import { useCallback, useState } from 'react';
import Layout from '../../Layout';
import Search from './Search';
import { SelectChangeEvent, Typography } from '@mui/material';
import FilterBar from './FilterBar';

const Home = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<string>('relevance');

  const onSearchClick = useCallback(() => {
    if (value) {
      console.error(value);
    } else {
      setIsError(true);
    }
  }, [value]);

  const onFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setIsError(false);
    },
    [],
  );

  const onSelectCategoryChange = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      setCategory(e.target.value as string);
    },
    [],
  );

  const onSelectSortChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setSort(e.target.value as string);
  }, []);

  return (
    <Layout>
      <Typography sx={{ color: 'rgba(0, 0, 0)', fontSize: '2.4rem' }}>
        Search for books
      </Typography>
      <Search
        onFieldChange={onFieldChange}
        onSearchClick={onSearchClick}
        isError={isError}
        value={value}
      />
      <FilterBar
        categoryValue={category}
        onCategorySelectChange={onSelectCategoryChange}
        sortingValue={sort}
        onSortingSelectChange={onSelectSortChange}
      />
    </Layout>
  );
};

export default Home;
