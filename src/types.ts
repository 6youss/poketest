export interface RessourceListItem {
  name: string;
  url: string;
}
export interface Pagination {
  count: number;
  next?: string;
  previous?: string;
  results: RessourceListItem[];
}
