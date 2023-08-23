import './globals.css'

export const metadata = {
  title: 'test aDD',
  description: 'TEST create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className={'container'}>
          {children}
        </div>
      </body>
    </html>
  )
}
