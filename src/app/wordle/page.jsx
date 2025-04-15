"use client"

import { View, Text, TextInput } from 'react-native-web'
import style from './style.js'

const LetterTile = () => (
    <View style={style.letterTile}>
        <TextInput
            style={style.letterInput}
            maxLength={1}
        />
    </View>
)

let tiles = []
for (var i = 0; i < 5; i++) tiles.push(<LetterTile key={i} />)
const WordEntry = () => (
    <View style={style.wordEntry}>
        {tiles}
    </View>
)

let wordEntries = []
for (var i = 0; i < 6; i++) wordEntries.push(<WordEntry key={i} />)
const Page = () => {
    return (
        <View style={style.container}>
            <Text style={style.headerText}>Wordle</Text>
            <View style={style.gridContainer}>
                {wordEntries}
            </View>
        </View>
    )
}


export default Page
