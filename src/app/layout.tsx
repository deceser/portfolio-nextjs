import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/widgets/layout';
import { MatrixEasterEgg } from '@/widgets/matrix';
import { TitleAndFaviconController } from '@/controllers/TitleAndFaviconController';
import { ThemeEffect } from '../features/theme';

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
              "!function(){try{var d=document.documentElement,s=localStorage.getItem('ui-storage'),t='system';if(s){var p=JSON.parse(s);t=p.state?.theme||'system'}var m=window.matchMedia('(prefers-color-scheme: dark)').matches;d.classList.remove('dark','light');d.removeAttribute('data-theme');if(t==='dark'||(t==='system'&&m)){d.classList.add('dark');d.setAttribute('data-theme','dark');d.style.colorScheme='dark'}else{d.classList.add('light');d.setAttribute('data-theme','light');d.style.colorScheme='light'}}catch(e){}}();",
          }}
        />
        <ThemeEffect />
        <MatrixEasterEgg>
          <TitleAndFaviconController />
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </MatrixEasterEgg>
      </body>
    </html>
  );
}
