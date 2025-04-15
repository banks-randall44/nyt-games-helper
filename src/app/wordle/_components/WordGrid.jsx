import { View, Text, TextInput } from 'react-native-web'
import { useState, useRef } from 'react'
import style from '../style.js'

// Tile Component
const inputRefs = []
for (let r = 0; r < 6; r++) {
    inputRefs[r] = []
    for (let c = 0; c < 5; c++) {
        inputRefs[r][c] = null
    }
}

const LetterTile = ({ row, col }) => {
    let [value, setValue] = useState('')

    inputRefs[row][col] = useRef(null)

    const handleChangeText = (text) => {
        console.log('Input edited:')
        console.log(inputRefs[row][col])

        if (text.length) {
            // Text added. Focus next cell
            if (col < 4) {
                const target = inputRefs[row][col+1]
                target.current.focus()
            } else {
                console.log('Reached end of word input')
            }
        } else {
        }

        setValue(text)
    }

    return (
        <View style={style.letterTile}>
            <TextInput
                ref={inputRefs[row][col]}
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
