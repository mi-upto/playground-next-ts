import Link from 'next/link'

export default function GlobalNav() {
  return (
    <nav className="container m-auto flex gap-3">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
  );
}
