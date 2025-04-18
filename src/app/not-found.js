import Link from 'next/link'
import { View, Text, StyleSheet } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40
    }
})

export default function NotFound() {
    return (
        <View style={style.container}>
            <Text style={style.text}>Page not found</Text>
            <Link href="/">Return Home</Link>
        </View>
    )
}
