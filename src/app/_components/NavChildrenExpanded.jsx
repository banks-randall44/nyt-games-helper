import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native-web'
import NavItemExpanded from './NavItemExpanded.jsx'
import Link from 'next/link'

const style = StyleSheet.create({
    link: {
        color: 'black'
    }
})

const childrenExpanded = () => {
    return (
        <>
            <NavItemExpanded
                child={<Link style={style.link} href='/spelling-bee'>Spelling Bee</Link>}
            />
            <NavItemExpanded
                child={<Link style={style.link} href='/'>Home</Link>}
            />
        </>
    )
}

export default childrenExpanded
