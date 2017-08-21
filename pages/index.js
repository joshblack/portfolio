import Link from 'next/link';

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About Me',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/work',
    text: 'Work',
  },
  {
    href: '/writing',
    text: 'Writing',
  },
  {
    href: '/resume',
    text: 'Resume',
  },
];

export default () =>
  <div>
    <header>
      Navigation
      <nav>
        <ul>
          {links.map((link, i) =>
            <li key={i}>
              <Link href={link.href} prefetch>
                <a>
                  {link.text}
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
    <h1>Welcome to Next.js!</h1>
  </div>;
