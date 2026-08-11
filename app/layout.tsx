import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { personalDetails } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arshadmurtaza.vercel.app'),
  title: 'Arshad Murtaza | AI Engineer & Machine Learning Specialist',
  description:
    'Portfolio of Arshad Murtaza — AI Engineer specializing in RAG pipelines, LangChain, Deep Learning, FastAPI, and end-to-end MLOps on AWS. IIT Delhi graduate.',
  keywords: [
    'Arshad Murtaza',
    'AI Engineer',
    'Machine Learning Engineer',
    'Generative AI Engineer',
    'RAG Engineer',
    'LangChain',
    'FastAPI',
    'AWS ECS',
    'MLOps',
    'IIT Delhi',
    'TensorFlow',
  ],
  authors: [{ name: 'Arshad Murtaza' }],
  creator: 'Arshad Murtaza',
  openGraph: {
    title: 'Arshad Murtaza | AI Engineer & Machine Learning Specialist',
    description:
      'Portfolio of Arshad Murtaza — AI Engineer specializing in RAG pipelines, LangChain, Deep Learning, FastAPI, and end-to-end MLOps on AWS.',
    url: 'https://arshadmurtaza.vercel.app',
    siteName: 'Arshad Murtaza Portfolio',
    images: [
      {
        url: '/my_pic2.png',
        width: 800,
        height: 800,
        alt: 'Arshad Murtaza - AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arshad Murtaza | AI Engineer',
    description:
      'Portfolio of Arshad Murtaza — AI Engineer specializing in RAG pipelines, LangChain, Deep Learning, FastAPI, and MLOps.',
    images: ['/my_pic2.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#080c14] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
