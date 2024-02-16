import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import noCoverImage from '../../../assets/img/no-image.png';
import { getBookUrl } from '../../../consts/api';
import { IFullBookInfo } from '../../../interfaces/IFullBookInfo';
import Layout from '../../Layout';
import {
  Author,
  BookDetailInfoWrapper,
  BookInfoWrapper,
  Category,
  Description,
  DescriptionWrapper,
  EmptyElement,
  ImageWrapper,
  StyledBackToHomeLink,
  StyledNav,
  Title,
} from './styled';

const Home = (): JSX.Element => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>('');
  const [bookCategories, setBookCategories] = useState<string>('');
  const [authors, setAuthors] = useState<string>('');
  const [coverUrl, setCoverUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (!id) return;
    (async () => {
      const response = await axios.get(`${getBookUrl}${id}`);
      const result: IFullBookInfo = response.data;

      setTitle(result.volumeInfo.title ?? '');
      setBookCategories(result.volumeInfo.categories?.join(' / ') ?? '');
      setAuthors(result.volumeInfo.authors?.join(', ') ?? '');
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
      <BookInfoWrapper>
        <ImageWrapper>
          {coverUrl ? (
            <Box
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'fill' }}
              alt={title}
              src={coverUrl}
            />
          ) : (
            <Box
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'fill' }}
              alt={title}
              src={noCoverImage}
            />
          )}
        </ImageWrapper>
        <BookDetailInfoWrapper>
          {bookCategories ? (
            <Category sx={{ marginBottom: '1rem' }}>{bookCategories}</Category>
          ) : (
            <EmptyElement />
          )}
          {title ? (
            <Title sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              {title}
            </Title>
          ) : (
            <EmptyElement />
          )}
          {authors ? (
            <Author sx={{ marginBottom: '1rem' }}>{authors}</Author>
          ) : (
            <EmptyElement />
          )}
          <Typography>Description:</Typography>
          <DescriptionWrapper>
            {description ? (
              <Description sx={{ marginBottom: '0.5rem' }}>
                {description}
              </Description>
            ) : (
              <EmptyElement />
            )}
          </DescriptionWrapper>
        </BookDetailInfoWrapper>
      </BookInfoWrapper>
    </Layout>
  );
};

export default Home;
