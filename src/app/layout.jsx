// These styles apply to every route in the application
import './globals.css'
import NavigationBar from './_components/NavigationBar.jsx'
import { Text, StyleSheet } from 'react-native-web'

export const metadata = {
    title: "Randall Banks's Personal Dev Sandbox",
    description: 'Generated using Next.js'
}

const style = StyleSheet.create({
    body: {
        backgroundColor: 'rgb(50,50,50)',
        color: 'white'
    },
    children: {
    }
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <link rel="icon" type="image/x-icon" href="/images/icon-rb.png" />
        <body style={style.body}>
            <NavigationBar />
            <div style={style.children}>{children}</div>
        </body>
        </html>
    )
}
