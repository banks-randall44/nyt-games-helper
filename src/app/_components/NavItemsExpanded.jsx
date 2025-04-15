import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native-web'
import NavItem from './NavItem.jsx'
import CustomButton from './CustomButton.jsx'

const style = StyleSheet.create({
    container: {
        paddingLeft: 30
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        left: 60
    }
})

const itemsExpanded = () => {
    return (
        <View style={style.container}>
            <NavItem
                imageSource={'images/house.png'}
                text={'Home'}
                destination={'/'}
                textStyle={style.text}
            />
            <NavItem
                imageSource={'images/bee.png'}
                text={'Spelling Bee'}
                destination={'/spelling-bee'}
                textStyle={style.text}
            />
            <NavItem
                imageSource={'images/wordle-logo.svg'}
                text={'Wordle'}
                destination={'/wordle'}
                textStyle={style.text}
            />
        </View>
    )
}

export default itemsExpanded
