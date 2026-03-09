import { useState, useMemo } from 'react';

import { getInitials } from '@utils/getInitials';

import './styles.css';

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export function Avatar({ src, alt, size = 52 }: AvatarProps) {
  const [loaded, setLoaded] = useState(false);
  const initials = useMemo(() => getInitials(alt), [alt]);

  return (
    <div className="avatar-wrap" style={{ width: size, height: size }}>
      {!loaded && (
        <div
          className="avatar-fallback"
          style={{ fontSize: size * 0.35 }}
          aria-hidden="true"
        >
          {initials}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </div>
  );
}
