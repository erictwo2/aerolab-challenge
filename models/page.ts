export interface Page<T> {
  currentPage: number,
  totalPages: number,
  size: number,
  total: number,
  sortField: string | null,
  sortDirection: string | null,
  data: T[]
}
