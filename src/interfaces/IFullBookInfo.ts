export interface IFullBookInfo {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      medium: string;
      small: string;
      smallThumbnail: string;
      thumbnail: string;
    };
    title: string;
  };
}
