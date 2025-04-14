import Link from 'next/link'
import { View, Text } from 'react-native-web'
import style from './style.js'

export default function Page() {
    return (
        <View style={style.container}>
            <Text style={style.header}>New York Times Daily Games Helper</Text>
            <Text style={style.subHeader}>By Randall Banks</Text>
        </View>
    )
}
