import type { User } from '@app-types/user';

import { useLocale } from '@hooks/useLocale';
import { pluralizeAge } from '@utils/pluralize';

import { Avatar } from '../Avatar';

import './styles.css';

type HeaderProps = {
  user: User;
};

export function Header({ user }: HeaderProps) {
  const { t } = useLocale();
  const fullName = `${user.firstName} ${user.lastName}`;
  const gender = user.gender === 'male' ? t.userCard.male : t.userCard.female;

  return (
    <div className="user-card-header">
      <Avatar src={user.image} alt={fullName} size={52} />
      <div className="user-card-identity">
        <h3 className="user-name">{fullName}</h3>
        <span className="user-badge">{gender}, {pluralizeAge(user.age)}</span>
      </div>
    </div>
  );
}
