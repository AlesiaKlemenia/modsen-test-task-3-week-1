import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  LinearProgress,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Layout from '../../Layout';
import Search from './Search';
import FilterBar from './FilterBar';
import { searchBooksUrl } from '../../../consts/api';
import { IBookCardInfo, IFullBookInfo } from '../../../consts/bookInfo';
import { CatalogField, SearchField } from './styled';
import BookCard from './BookCard';
import BookCatalog from './BookCatalog';

const Home = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<string>('relevance');
  const [catalogTitle, setCatalogTitle] = useState<string>('');
  const [books, setBooks] = useState<IBookCardInfo[]>([]);
  const [searchStartIndex, setSearchStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const onLoadMoreClick = useCallback(() => {
    setSearchStartIndex((searchIndex) => searchIndex + 30);
  }, []);

  const parseRecievedBooks = (fullBookInfo: IFullBookInfo): IBookCardInfo => {
    const newCard: IBookCardInfo = {
      id: fullBookInfo?.id,
      title: fullBookInfo?.volumeInfo?.title,
      bookCategories: fullBookInfo?.volumeInfo?.categories,
      authors: fullBookInfo?.volumeInfo?.authors,
      coverUrl: fullBookInfo?.volumeInfo?.imageLinks?.thumbnail,
    };

    return newCard;
  };

  const getBooks = useCallback(async (): Promise<number> => {
    const url = `${searchBooksUrl}${value.split(' ').join('+')}${
      category === 'all' ? '' : `:subject:${category}`
    }&startIndex=${searchStartIndex}&maxResults=30&orderBy=${sort}`;
    const response = await axios.get(url);

    const booksArray: IFullBookInfo[] = response.data?.items;
    const a = booksArray.map((bookInfo) => parseRecievedBooks(bookInfo));
    setBooks((prev) => [...prev, ...a]);
    setIsLoading(false);
    return response.data?.totalItems || 0;
  }, [category, sort, value, searchStartIndex]);

  const onSearchClick = useCallback(async () => {
    if (value) {
      setBooks(() => []);
      setIsLoading(true);
      setSearchStartIndex(0);
      setTimeout(async () => {
        const totalItems = await getBooks();
        setCatalogTitle(`Found ${totalItems} results`);
      }, 0);
    } else {
      setIsError(true);
    }
  }, [value, getBooks]);

  useEffect(() => {
    if (searchStartIndex) {
      getBooks();
    }
  }, [searchStartIndex, getBooks]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', () => onKeyDown);
    return () => {
      window.removeEventListener('keydown', () => onKeyDown);
    };
  });

  return (
    <Layout>
      <SearchField>
        <Typography sx={{ color: 'rgba(0, 0, 0)', fontSize: '2.4rem' }}>
          Search for books
        </Typography>
        <Search
          onFieldChange={onFieldChange}
          onKeyDown={onKeyDown}
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
      </SearchField>
      {isLoading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <CatalogField>
          <Typography sx={{ color: 'rgba(0, 0, 0)', fontSize: '1.7rem' }}>
            {catalogTitle}
          </Typography>
          {books.length ? (
            <>
              <BookCatalog>
                {books.map((book, index) => (
                  <BookCard
                    key={`${book.id}${index}`}
                    id={book.id}
                    title={book.title}
                    bookCategories={book.bookCategories}
                    authors={book.authors}
                    coverUrl={book.coverUrl}
                  />
                ))}
              </BookCatalog>
              <Button variant="text" onClick={onLoadMoreClick}>
                Load more
              </Button>
            </>
          ) : null}
        </CatalogField>
      )}
    </Layout>
  );
};

export default Home;
