const paths = {
  home: '/',
  book: {
    route: '/books/:id',
    url: '/books/',
  },
  notFound: '*',
} as const;

export default paths;
