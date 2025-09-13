export interface IGetCategoriesResponse {
  data: ICategory[];
  meta: IGetCategoriesResponseMeta;
}

interface IGetCategoriesResponseMeta {
  pagination: IGetCategoriesResponseMetaPagination;
}

interface IGetCategoriesResponseMetaPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: ICategoryImage;
}

export interface ICategoryImage {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}
