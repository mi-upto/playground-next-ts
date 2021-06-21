import type { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export type AppLinkProps = {
  href: string;
  className?: string;
  active?: boolean
};

export const AppLink: FC<AppLinkProps> = ({ children, href, className = '', active = false }) => {
  const linkClass = classNames('text-blue-700', className, {
    '!text-yellow-500': active,
    'link-hoge': false,
    'link-over': true,
  });

  return (
    <Link href={href}>
      <a href={href} className={linkClass}>
        {children}
      </a>
    </Link>
  );
};
export default AppLink;
