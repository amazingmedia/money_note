import './globals.css'

export const metadata = {
  title: 'mnote001 | Cloud Portfolio',
  description: 'Manage your finance with cloud',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
