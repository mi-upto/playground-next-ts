import type { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export type AppLinkProps = {
  href: string;
  className?: string;
};

export const AppLink: FC<AppLinkProps> = ({ children, href, className = '' }) => {

  const linkClass = classNames('text-blue-700', className, {
    'link-pressed': true,
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
