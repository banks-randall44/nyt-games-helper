import { View, Text, TextInput } from 'react-native-web'
import { useState } from 'react'
import style from '../style.js'


// Tile Component
const LetterTile = ({value}) => {
    return (
        <View style={style.letterTile}>
            <TextInput
                style={style.letterInput}
                maxLength={1}
                value={value}
            />
        </View>
    )
}

// Word entry component
const WordEntry = ({word}) => {
    return (
        <View style={style.wordEntry}>
            <LetterTile value={word[0]} />
            <LetterTile value={word[1]} />
            <LetterTile value={word[2]} />
            <LetterTile value={word[3]} />
            <LetterTile value={word[4]} />
        </View>
    )
}

// Word grid component
const WordGrid = () => {
    const [gridValues, setGridValues] = useState([
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']
    ])

    return (
        <View style={style.gridContainer}>
            <WordEntry 
                word={gridValues[0]}
            />
            <WordEntry 
                word={gridValues[1]}
            />
            <WordEntry 
                word={gridValues[2]}
            />
            <WordEntry 
                word={gridValues[3]}
            />
            <WordEntry 
                word={gridValues[4]}
            />
            <WordEntry 
                word={gridValues[5]}
            />
        </View>
    )
}


// Alternate approach where LetterTiles simple remember their own values
// Its not yet clear how I would go about fetching those values for word processing 
//
// Tile Component
//const LetterTile = () => {
//    const [value, setValue] = useState('')
//
//    return (
//        <View style={style.letterTile}>
//            <TextInput
//                style={style.letterInput}
//                maxLength={1}
//                value={value}
//                onChangeText={setValue}
//            />
//        </View>
//    )
//}
//
//// Word entry component
//const WordEntry = () => {
//    return (
//        <View style={style.wordEntry}>
//            <LetterTile />
//            <LetterTile />
//            <LetterTile />
//            <LetterTile />
//            <LetterTile />
//        </View>
//    )
//}
//
//// Word grid component
//const WordGrid = () => {
//    return (
//        <View style={style.gridContainer}>
//            <WordEntry />
//            <WordEntry />
//            <WordEntry />
//            <WordEntry />
//            <WordEntry />
//            <WordEntry />
//        </View>
//    )
//}



export default WordGrid
