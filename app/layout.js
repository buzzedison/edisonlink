import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edison Ade: Business Strategist and Digital Transformation Specialist',
  description: 'Aspiring Venture Capitalist | Entrepreneur | Business Coach | Digital Marketing Enthusiast | Writer | Coder | Sports Fan | Movie Buff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
