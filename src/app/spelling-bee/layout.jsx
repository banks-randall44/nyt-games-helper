import { View, StyleSheet } from 'react-native-web'
import NavigationBar from '../_components/NavigationBar.jsx'
import './styles.css'

const style = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: 'row',
        //backgroundColor: 'red'
    }
})

export default function SpellingBeeLayout({ children }) {
    return (
        <View style={style.container}>
            <View>{children}</View>
            <NavigationBar />
        </View>
    )
}
