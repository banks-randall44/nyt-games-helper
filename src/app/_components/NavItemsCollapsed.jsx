import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native-web'
import NavItem from './NavItem.jsx'
import CustomButton from './CustomButton.jsx'

const style = StyleSheet.create({
    link: {
        color: 'black'
    }
})

const itemsCollapsed = () => {
    return (
        <>
            <NavItem
                imageSource={'images/house.png'}
                text={''}
                destination={'/'}
            />
            <NavItem
                imageSource={'images/bee.png'}
                text={''}
                destination={'/spelling-bee'}
            />
            <NavItem
                imageSource={'images/wordle-logo.svg'}
                text={''}
                destination={'/wordle'}
            />
        </>
    )
}

export default itemsCollapsed
