import type { UsersResponse } from '@app-types/user';

const BASE_URL = 'https://dummyjson.com';

export async function fetchUsers(
  limit: number,
  skip: number,
  signal: AbortSignal
): Promise<UsersResponse> {
  const response = await fetch(`${BASE_URL}/users?limit=${limit}&skip=${skip}`, { signal });
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

export async function searchUsers(
  query: string,
  limit: number,
  skip: number,
  signal: AbortSignal
): Promise<UsersResponse> {
  const response = await fetch(
    `${BASE_URL}/users/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`,
    { signal }
  );
  if (!response.ok) throw new Error('Failed to search users');
  return response.json();
}
