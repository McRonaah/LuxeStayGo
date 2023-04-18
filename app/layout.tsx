import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';

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
          <ToasterProvider />
          <LoginModal />
          <RegisterModal/>
          <Navbar />
        </ClientOnly>
          {/* <div className="pb-20 pt-28"> */}
            {children}
          {/* </div> */}
        </body>
    </html>
  )
}
