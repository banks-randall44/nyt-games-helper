import { View, StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
    }
})

export default function WordleLayout({ children }) {
    return (
        <View style={style.container}>
            <View>{children}</View>
        </View>
    )
}
