import { useQuery } from '@tanstack/react-query';
import { fetchAllStores } from '@/lib/api/store';

export const useStores = () => {
  return useQuery({
    queryKey: ['all-stores'],
    queryFn: fetchAllStores,
  });
};
