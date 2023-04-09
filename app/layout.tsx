import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone app',
}

const font = Nunito({ 
  subsets: ['latin'], 
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
