import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from '@/redux/slices/Providers'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'KritCart',
  description: 'Full Stack Ecommerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>      
    <Providers>
    <Navbar/>
        {children}
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
