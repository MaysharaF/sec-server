import Pagination from './Pagination';

export interface PageableParams<T> {
  select: [any[], number];

  pageable: Pagination;
}

export default class Page<T> {
  content: any[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;

  constructor({ select, pageable }: PageableParams<T>) {
    const [content, count] = select;
    this.content = content;
    this.page = pageable.page;
    this.size = pageable.size;
    this.totalPages = Math.ceil(count / pageable.size);
    this.totalElements = count;
  }
}
