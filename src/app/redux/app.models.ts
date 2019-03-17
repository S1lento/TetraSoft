export interface User {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface UsersPayload<Data = User> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
}
