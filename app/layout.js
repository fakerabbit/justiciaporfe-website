import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Justicia Por Fe - Estudios Bíblicos',
  description: 'Estudios bíblicos sobre la justificación por la fe, el santuario y la teología del tiempo del fin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}