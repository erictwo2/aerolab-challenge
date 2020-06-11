export interface Page<T> {
  prevPage: string | null,
  nextPage: string | null,
  currentPage: number,
  size: number,
  total: number,
  data: T[]
}
