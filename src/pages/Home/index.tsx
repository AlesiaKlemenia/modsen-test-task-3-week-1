import Layout from '@components/Layout';
import {
  Box,
  Button,
  LinearProgress,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { IBookCardInfo } from '@/interfaces/IBookCardInfo';
import { IFullBookInfo } from '@/interfaces/IFullBookInfo';
import BookCard from '@/pages/Home/BookCard';
import BookCatalog from '@/pages/Home/BookCatalog';
import { searchBooksUrl } from '@/pages/Home/constants';
import EmptySearchResult from '@/pages/Home/EmptySearchResult';
import SearchBar from '@/pages/Home/SearchBar';
import {
  CatalogField,
  CatalogFoundResultsTitle,
  ProgressBarWrapper,
} from '@/pages/Home/styled';

const Home = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<string>('relevance');
  const [booksCount, setBooksCount] = useState<number>(-1);
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
    return {
      id: fullBookInfo?.id,
      title: fullBookInfo?.volumeInfo?.title,
      bookCategories: fullBookInfo?.volumeInfo?.categories,
      authors: fullBookInfo?.volumeInfo?.authors,
      coverUrl: fullBookInfo?.volumeInfo?.imageLinks?.thumbnail,
    };
  };

  const getBooks = useCallback(async (): Promise<void> => {
    const url = `${searchBooksUrl}${value.split(' ').join('+')}${
      category === 'all' ? '' : `:subject:${category}`
    }&startIndex=${searchStartIndex}&maxResults=30&orderBy=${sort}`;
    const response = await axios.get(url);
    if (!response.data.totalItems) {
      setBooksCount(() => 0);
      setIsLoading(false);
      return;
    }

    const booksArray: IFullBookInfo[] = response.data?.items;
    const a = booksArray.map((bookInfo) => parseRecievedBooks(bookInfo));
    setBooks((prev) => [...prev, ...a]);
    setIsLoading(false);
    setBooksCount(response.data.totalItems);
  }, [category, sort, value, searchStartIndex]);

  const onSearchClick = useCallback(async () => {
    if (value) {
      setBooks(() => []);
      setIsLoading(true);
      setSearchStartIndex(0);
      setTimeout(async () => {
        await getBooks();
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
      <SearchBar
        data-testid="search-bar"
        onFieldChange={onFieldChange}
        onKeyDown={onKeyDown}
        onSearchClick={onSearchClick}
        isError={isError}
        value={value}
        category={category}
        onCategorySelectChange={onSelectCategoryChange}
        sort={sort}
        onSortingSelectChange={onSelectSortChange}
      />
      {isLoading ? (
        <ProgressBarWrapper>
          <LinearProgress data-testid="loading-indicator" />
        </ProgressBarWrapper>
      ) : (
        <CatalogField>
          {books.length ? (
            <>
              <CatalogFoundResultsTitle>
                Found {booksCount} results
              </CatalogFoundResultsTitle>
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
          ) : booksCount ? null : (
            <EmptySearchResult />
          )}
        </CatalogField>
      )}
    </Layout>
  );
};

export default Home;
