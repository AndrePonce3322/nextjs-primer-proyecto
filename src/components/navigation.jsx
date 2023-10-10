import Link from 'next/link';

const links = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/about',
    label: 'About',
  },
  {
    route: '/posts',
    label: 'Posts',
  },
];

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className='flex p-4 border gap-2 mb-4 rounded'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link className='underline hover:text-blue-800' href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
