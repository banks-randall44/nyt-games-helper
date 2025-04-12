// These styles apply to every route in the application
import './globals.css'

export const metadata = {
    title: "Randall Banks's Personal Dev Sandbox",
    description: 'Generated using Next.js'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <link rel="icon" type="image/x-icon" href="/images/icon-rb.png" />
        <body>{children}</body>
        </html>
    )
}
