import { useState, useEffect, useCallback } from 'react';

import type { User, UsersResponse } from '@app-types/user';

import { fetchUsers, searchUsers } from '@api/usersApi';
import { useLocale } from '@hooks/useLocale';

const TIMEOUT_MS = 8000;
const LIMIT = 12;

type UseUsersReturn = {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  query: string;
  setQuery: (q: string) => void;
  setPage: (p: number) => void;
  retry: () => void;
  resetToHome: () => void;
};

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPageState] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQueryState] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [retryFlag, setRetryFlag] = useState(0);
  const { t } = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(timer);
  }, [query]);

  const setQuery = useCallback((q: string) => {
    setQueryState(q);
    setPageState(1);
  }, []);

  const setPage = useCallback((p: number) => {
    setPageState(p);
  }, []);

  const retry = useCallback(() => {
    setRetryFlag((f) => f + 1);
  }, []);

  const resetToHome = useCallback(() => {
    setQueryState('');
    setDebouncedQuery('');
    setPageState(1);
    setError(null);
    setRetryFlag((f) => f + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort('timeout'), TIMEOUT_MS);

    async function load() {
      setLoading(true);
      setError(null);
      const skip = (page - 1) * LIMIT;
      try {
        let data: UsersResponse;
        if (debouncedQuery.trim()) {
          data = await searchUsers(debouncedQuery.trim(), LIMIT, skip, controller.signal);
        } else {
          data = await fetchUsers(LIMIT, skip, controller.signal);
        }
        if (!controller.signal.aborted) {
          setUsers(data.users);
          setTotal(data.total);
        }
      } catch {
        if (controller.signal.reason === 'timeout') {
          setError(t.states.errorTimeout);
        } else if (!controller.signal.aborted) {
          setError(t.states.errorNetwork);
        }
      } finally {
        if (!controller.signal.aborted || controller.signal.reason === 'timeout') {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [debouncedQuery, page, retryFlag, t]);

  const totalPages = Math.ceil(total / LIMIT);

  return { users, total, page, totalPages, loading, error, query, setQuery, setPage, retry, resetToHome };
}
