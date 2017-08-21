import Link from 'next/link';

const links = [
  {
    href: '/projects/oscillate',
    text: 'Oscillate',
  },
  {
    href: '/projects/graphql-quick-type',
    text: 'GraphQL Quick Type',
  },
  {
    href: '/projects/require-graphql-schema',
    text: 'Require GraphQL Schema',
  },
  {
    href: '/projects/react-transpile',
    text: 'React Transpile',
  },
  {
    href: '/projects/gulp-simplefont64',
    text: 'Gulp Simplefont 64',
  },
  {
    href: '/projects/ibm-graph',
    text: 'IBM Graph',
  },
  {
    href: '/projects/react-local-boundary',
    text: 'React Local Boundary',
  },
  {
    href: '/projects/js-codemods',
    text: 'JavaScript Codemods',
  },
  {
    href: '/projects/elixir-graphql-boilerplate',
    text: 'Elixir GraphQL Boilerplate',
  },
  {
    href: '/projects/heart',
    text: 'HEART Boilerplate',
  },
  {
    href: '/projects/rcli',
    text: 'React CLI',
  },
  {
    href: '/projects/react-svg-converter',
    text: 'React SVG Converter',
  },
];

export default () =>
  <section>
    <header>
      <h1>Projects</h1>
    </header>
    <article>
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
    </article>
  </section>;
