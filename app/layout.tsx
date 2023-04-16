import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';

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
      <body className={font.className}>
      <ClientOnly>
          <Navbar />
        </ClientOnly>
          {/* <div className="pb-20 pt-28"> */}
            {children}
          {/* </div> */}
        </body>
    </html>
  )
}
