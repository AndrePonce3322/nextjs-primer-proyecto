import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '../components/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>First app - NextJS</title>
        <link rel='icon' href='./favicon.ico' sizes='any' />
      </head>

      <body className={`${inter.className} p-5 flex justify-center`}>
        <main className='w-[75vw]'>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
