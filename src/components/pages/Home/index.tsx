import { useCallback, useEffect, useState } from 'react';
import Layout from '../../Layout';
import Search from './Search';
import { Button, SelectChangeEvent, Typography } from '@mui/material';
import FilterBar from './FilterBar';
import { bookUrl } from '../../../consts/api';
import axios from 'axios';
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

  const onSearchClick = useCallback(async () => {
    if (value) {
      setSearchStartIndex(0);
      const totalItems = await getBooks();
      setCatalogTitle(`Found ${totalItems} results`);
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

  const onLoadMoreClick = useCallback(() => {
    setSearchStartIndex((searchIndex) => searchIndex + 30);
  }, []);

  useEffect(() => {
    if(searchStartIndex ) {
      getBooks();
    }
  },[searchStartIndex]);

  useEffect(() => {
    window.addEventListener("keydown", () => onKeyDown);
    return () => {
      window.removeEventListener("keydown", () => onKeyDown);
    }
  })

  const getBooks = async (): Promise<number> => {
    const url = `${bookUrl}${value
      .split(' ')
      .join('+')}${(category === 'all' ? '' : `:subject:${category}`)}&startIndex=${searchStartIndex}&maxResults=30&orderBy=${sort}`;
    const response = await axios.get(url);

    const booksArray: IFullBookInfo[] = response.data?.items;
    const a = booksArray.map((bookInfo) => parseRecievedBooks(bookInfo));
    setBooks((prev) => [...prev, ...a]);

    return response.data?.totalItems | 0;
  };

  const parseRecievedBooks = (fullBookInfo: IFullBookInfo): IBookCardInfo => {
    const id = fullBookInfo?.id,
      title = fullBookInfo?.volumeInfo?.title,
      bookCategories = fullBookInfo?.volumeInfo?.categories,
      authors = fullBookInfo?.volumeInfo?.authors,
      coverUrl = fullBookInfo?.volumeInfo?.imageLinks?.thumbnail;

    const newCard: IBookCardInfo = {
      id: id,
      title: title,
      bookCategories: bookCategories,
      authors: authors,
      coverUrl: coverUrl,
    };
    return newCard;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  };

  return (
    <Layout>
      <SearchField>
        <Typography sx={{ color: 'rgba(0, 0, 0)', fontSize: '2.4rem' }}>
          Search for books
        </Typography>
        <Search
          onFieldChange={onFieldChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearchClick();
            }
          }}
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
                  ></BookCard>
                ))}
            </BookCatalog>
            <Button variant='text' onClick={onLoadMoreClick}>Load more</Button>
          </>
        ) : (<></>)}
      </CatalogField>
    </Layout>
  );
};

export default Home;
