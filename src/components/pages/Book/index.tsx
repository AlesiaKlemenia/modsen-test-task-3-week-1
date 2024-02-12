import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
import bookStore from '../../../stores/BookStore';
import noCoverImage from '../../../assets/img/no-image.png';
import { getBookUrl } from '../../../consts/api';
import Layout from '../../Layout';
import { IFullBookInfo } from '../../../consts/bookInfo';

const Home = observer(() => {
  const [description, setDescription] = useState<string>('');
  const { id, title, bookCategories, authors, coverUrl } = bookStore;

  useEffect(() => {
    if (!id) return;
    (async () => {
      const response = await axios.get(`${getBookUrl}${id}`);
      const result: IFullBookInfo = response.data;
      setDescription(result.volumeInfo.description);
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
            <Category sx={{ marginBottom: '1rem' }}>
              {bookCategories.join(', ')}
            </Category>
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
            <Author sx={{ marginBottom: '1rem' }}>{authors.join(', ')}</Author>
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
});

export default Home;
