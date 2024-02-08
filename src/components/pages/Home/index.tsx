import { useCallback, useState } from 'react';
import Layout from '../../Layout';
import Search from './Search';

const Home = () => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

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

  return (
    <Layout>
      <Search
        onFieldChange={onFieldChange}
        onSearchClick={onSearchClick}
        isError={isError}
        value={value}
      />
    </Layout>
  );
};

export default Home;
