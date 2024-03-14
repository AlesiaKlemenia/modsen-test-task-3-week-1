import '@testing-library/jest-dom';

import { StyledEngineProvider } from '@mui/material';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import { IBookCardInfo } from '@/interfaces/IBookCardInfo';
import BookCard from '@/pages/Home/BookCard';

describe('BookCard component', () => {
  jest.mock('react-router-dom', () => ({
    Link: 'Link',
  }));

  it('renders correctly with full data', () => {
    const bookCardProps = {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    };

    const componentRenderer = renderer.create(
      <StyledEngineProvider injectFirst>
        <MemoryRouter>
          <BookCard
            id={bookCardProps.id}
            title={bookCardProps.title}
            bookCategories={bookCardProps.bookCategories}
            authors={bookCardProps.authors}
            coverUrl={bookCardProps.coverUrl}
          />
        </MemoryRouter>
        ,
      </StyledEngineProvider>,
    );
    const tree = componentRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });

  const cases = [
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: [],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: [],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [],
      authors: [],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [
        'Juvenile Fiction / Fantasy & Magic',
        'Fiction / Fantasy / General',
      ],
      authors: [],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [],
      authors: [],
      coverUrl:
        'http://books.google.com/books/publisher/content?id=QzHDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71AmI8TP3JEaV01DOKOF1T6NA531p_djNucrd6UTjfx0XxtSaID1Eludk7BvwGVf_0DDM379yP43fWY0xKHknDCv1vWKTjIAFM6MDeQ9RGs83b0nKdsjvswitqdD1uQL2zk2Pjg&source=gbs_api',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [],
      authors: ['J.K. Rowling', 'John Tiffany', 'Jack Thorne'],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: `Harry Potter und das verwunschene Kind`,
      bookCategories: [],
      authors: [],
      coverUrl: '',
    },
    {
      id: 'QzHDDwAAQBAJ',
      title: '',
      bookCategories: [],
      authors: [],
      coverUrl: '',
    },
  ];

  it.each(cases)(
    'renders correctly with not full data',
    ({ id, title, bookCategories, authors, coverUrl }: IBookCardInfo) => {
      const componentRendererWithoutBookCategories = renderer.create(
        <StyledEngineProvider injectFirst>
          <MemoryRouter>
            <BookCard
              id={id}
              title={title}
              bookCategories={bookCategories}
              authors={authors}
              coverUrl={coverUrl}
            />
          </MemoryRouter>
          ,
        </StyledEngineProvider>,
      );
      const treeWithoutBookCategories =
        componentRendererWithoutBookCategories.toJSON();

      expect(treeWithoutBookCategories).toMatchSnapshot();
    },
  );
});
