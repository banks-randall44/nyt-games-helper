import { View, Text, TextInput } from 'react-native-web'
import { useState, useRef } from 'react'
import style from '../style.js'

// Tile Component
const LetterTile = ({ row, col }) => {
    let [value, setValue] = useState('')
    const [focusTarget, setFocusTarget] = useState([0,0])


    const handleChangeText = (text) => {
        // Update focus target
        // If text is empty, go back a tile. Otherwise, go forward
        // TODO

        setValue(text)
    }

    // Focus the top left tile
    let autoFocus = false
    if (row == focusTarget[0] && col == focusTarget[1]) {
        console.log('focusing on ('+row+','+col+')')
        autoFocus = true
    }

    return (
        <View style={style.letterTile}>
            <TextInput
                autoFocus={autoFocus}
                style={style.letterInput}
                maxLength={1}
                value={value.toUpperCase()}
                onChangeText={handleChangeText}
            />
        </View>
    )
}

// Word entry component
const WordEntry = ({ row }) => {
    return (
        <View style={style.wordEntry}>
            <LetterTile row={row} col={0} />
            <LetterTile row={row} col={1} />
            <LetterTile row={row} col={2} />
            <LetterTile row={row} col={3} />
            <LetterTile row={row} col={4} />
        </View>
    )
}

// Word grid component
const WordGrid = () => {
    return (
        <View style={style.gridContainer}>
            <WordEntry row={0} />
            <WordEntry row={1} />
            <WordEntry row={2} />
            <WordEntry row={3} />
            <WordEntry row={4} />
            <WordEntry row={5} />
        </View>
    )
}

export default WordGrid
