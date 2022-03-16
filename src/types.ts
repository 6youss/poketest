export interface RessourceListItem {
  name: string;
  url: string;
}
export interface RessourceList {
  count: number;
  next?: string;
  previous?: string;
  results: RessourceListItem[];
}
