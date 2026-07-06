import { fetchNotes } from '@/lib/api';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

export function useFetchNotes(page: number, search: string) {
  return useQuery({
    queryKey: ['notes', page, search],
    queryFn: () => fetchNotes({ page, search }),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
}
