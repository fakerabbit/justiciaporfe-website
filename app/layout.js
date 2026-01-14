import './globals.css'

export const metadata = {
  title: 'Justicia Por Fe - Estudios Bíblicos',
  description: 'Estudios bíblicos profundos sobre la justificación por la fe y la teología del tiempo del fin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}