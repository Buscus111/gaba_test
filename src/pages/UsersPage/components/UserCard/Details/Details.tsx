import type { User } from '@app-types/user';

import { EmailIcon, PhoneIcon, LocationIcon, CompanyIcon } from '@components/Icons';

import './styles.css';

type DetailsProps = {
  user: User;
};

export function Details({ user }: DetailsProps) {
  return (
    <ul className="user-details">
      <li className="detail-email">
        <EmailIcon className="detail-icon" />
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </li>
      <li className="detail-row-pair">
        <span className="detail-item">
          <PhoneIcon className="detail-icon" />
          {user.phone}
        </span>
        <span className="detail-item">
          <LocationIcon className="detail-icon" />
          {user.address.city}
        </span>
      </li>
      <li className="detail-company">
        <CompanyIcon className="detail-icon" />
        <span className="detail-text">{user.company.name}</span>
      </li>
    </ul>
  );
}
