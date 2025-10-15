import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import MatrixEasterEgg from '@/components/MatrixEasterEgg';
import { TitleAndFaviconController } from '@/components/TitleAndFaviconController';

export const metadata: Metadata = {
  title: 'Denys Bezverkhyi',
  description:
    'Frontend developer creating modern web applications with focus on user experience and performance',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-bg text-fg antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "!function(){try{var d=document.documentElement,t=localStorage.getItem('theme'),m=window.matchMedia('(prefers-color-scheme: dark)').matches;d.classList.remove('dark','light');d.removeAttribute('data-theme');if(t==='dark'||(!t&&m)||t==='system'&&m){d.classList.add('dark');d.setAttribute('data-theme','dark');d.style.colorScheme='dark'}else{d.classList.add('light');d.setAttribute('data-theme','light');d.style.colorScheme='light'}}catch(e){}}();",
          }}
        />
        <MatrixEasterEgg>
          <ThemeProvider>
            <TitleAndFaviconController />
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </ThemeProvider>
        </MatrixEasterEgg>
      </body>
    </html>
  );
}
