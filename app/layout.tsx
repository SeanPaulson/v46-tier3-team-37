import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar/navbar';
import { Lexend_Deca } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import AuthProvider from '@/context/AuthProvider';

const inter = Lexend_Deca({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
  variable: '--font-lexend-Deca',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <html lang='en'>
      <body
        className={`dark:bg-backgroundPrimary ${inter.variable} font-sans`}
      >
        <AuthProvider session={session}>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
