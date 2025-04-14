import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native-web'
import NavItemCollapsed from './NavItemCollapsed.jsx'
import Link from 'next/link'

const style = StyleSheet.create({
    link: {
        color: 'black'
    }
})

const childrenCollapsed = () => {
    return (
        <>
            <NavItemCollapsed
                child={<Link style={style.link} href='/spelling-bee'>SB</Link>}
            />
            <NavItemCollapsed
                child={<Link style={style.link} href='/'>Home</Link>}
            />
        </>
    )
}

export default childrenCollapsed
