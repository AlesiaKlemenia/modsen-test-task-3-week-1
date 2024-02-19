import BookInfo from '@components/pages/Book/BookInfo';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Layout from '@/components/Layout';
import { IFullBookInfo } from '@/interfaces/IFullBookInfo';

import { getBookUrl } from './constants';
import { StyledBackToHomeLink, StyledNav } from './styled';

const Home = (): JSX.Element => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>('');
  const [bookCategories, setBookCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [coverUrl, setCoverUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (!id) return;
    (async () => {
      const response = await axios.get(`${getBookUrl}${id}`);
      const result: IFullBookInfo = response.data;

      setTitle(result.volumeInfo.title ?? '');
      setBookCategories(result.volumeInfo.categories ?? []);
      setAuthors(result.volumeInfo.authors ?? []);
      setCoverUrl(
        result.volumeInfo.imageLinks?.medium ??
          result.volumeInfo.imageLinks?.small ??
          result.volumeInfo.imageLinks?.thumbnail ??
          result.volumeInfo.imageLinks?.smallThumbnail ??
          '',
      );
      setDescription(result.volumeInfo.description ?? '');
    })();
  }, [id]);

  return (
    <Layout>
      <StyledNav>
        <StyledBackToHomeLink
          href="/"
          sx={{ margin: '1vw', color: 'rgba(0, 0, 0)', textDecoration: 'none' }}
        >
          <ArrowBackIosIcon />
          Back to Home
        </StyledBackToHomeLink>
      </StyledNav>
      <BookInfo
        id={id ?? ''}
        title={title}
        bookCategories={bookCategories}
        authors={authors}
        coverUrl={coverUrl}
        description={description}
      />
    </Layout>
  );
};

export default Home;
