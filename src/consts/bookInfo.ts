export interface IBookCardInfo {
  id: string;
  title: string;
  bookCategories: string[];
  authors: string[];
  coverUrl: string;
}

export interface IBookDetailInfo extends IBookCardInfo {
  description: string;
}

export interface IFullBookInfo {
  accessInfo: object;
  etag: string;
  id: string;
  kind: string;
  saleInfo: object;
  searchInfo: object;
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: string[];
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: [];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: object;
    previewLink: string;
    printType: string;
    publishedDate: string;
    readingModes: object;
    title: string;
  };
}
