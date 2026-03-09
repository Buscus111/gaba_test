import type { User } from '@app-types/user';

import { Header } from './Header';
import { Details } from './Details';

import './styles.css';

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <Header user={user} />
      <Details user={user} />
    </div>
  );
}
