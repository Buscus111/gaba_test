import type { User } from '@app-types/user';

import { Pagination } from '@components/Pagination';
import { useLocale } from '@hooks/useLocale';

import { UserCard } from '../UserCard';

type UsersListProps = {
  users: User[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function UsersList({ users, page, totalPages, onPageChange }: UsersListProps) {
  const { t } = useLocale();

  return (
    <>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
        labelPrev={t.pagination.prev}
        labelNext={t.pagination.next}
      />
    </>
  );
}
