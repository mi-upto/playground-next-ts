import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export type AppLinkProps = {
  href: string;
  className?: string;
  active?: boolean
};

export const AppLink: FC<AppLinkProps> = ({ children, href, className = ''}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const linkClass = classNames(
    'text-black hover:text-blue-800',
    className,
    {
      '!text-white': isActive,
      'bg-blue-800': isActive,
      'link-hoge': false,
      'link-over': true,
    }
  );

  return (
    <Link href={href}>
      <a href={href} className={linkClass}>
        {children}
      </a>
    </Link>
  );
};
export default AppLink;
