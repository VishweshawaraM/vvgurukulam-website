import './globals.css'

export const metadata = {
  title: 'Veda Vijnana Gurukulam',
  description:
    'A residential Gurukula preserving Veda, Sanskrit, and the Guru-Sisya Paramparai since 1997.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-ui">{children}</body>
    </html>
  )
}
