import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native-web'
import NavItem from './NavItem.jsx'
import CustomButton from './CustomButton.jsx'
import Link from 'next/link'

const style = StyleSheet.create({
    link: {
        color: 'black'
    }
})

const itemsExpanded = () => {
    return (
        <>
            <NavItem
                child={<Link style={style.link} href='/spelling-bee'>Spelling Bee</Link>}
            />
            <NavItem
                child={<Link style={style.link} href='/'>Home</Link>}
            />
        </>
    )
}

export default itemsExpanded
