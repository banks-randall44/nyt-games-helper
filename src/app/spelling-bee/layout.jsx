import { View, Text, StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
    }
})

export default function SpellingBeeLayout({ children }) {
    return (
        <View style={style.container}>
            <View>{children}</View>
        </View>
    )
}
