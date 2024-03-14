import { StyledEngineProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import React from 'react';

import BookInfo from '@/pages/Book/BookInfo/index';
import { potterBook } from '@/tests/mocks/bookInfoMock';

describe('BookInfo Component', () => {
  it('renders book information correctly', () => {
    render(
      <StyledEngineProvider injectFirst>
        <BookInfo
          description=""
          id={potterBook.id}
          title={potterBook.title}
          bookCategories={potterBook.bookCategories}
          authors={potterBook.authors}
          coverUrl={potterBook.coverUrl}
        />
      </StyledEngineProvider>,
    );

    expect(screen.getByText(potterBook.title)).toBeInTheDocument();
    expect(screen.getByText(potterBook.authors.join(', '))).toBeInTheDocument();
    expect(
      screen.getByText(potterBook.bookCategories.join(' | ')),
    ).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
  });
});
