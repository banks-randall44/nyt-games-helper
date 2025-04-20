import { View, Text, TextInput } from 'react-native-web'
import { useState, useRef, useEffect } from 'react'
import style from '../style.js'
import globals from '../globals.js'

// Tile Component
const LetterTile = ({ row, col }) => {
    let [value, setValue] = useState('')

    globals.tileRefs[row][col] = useRef(null)

    const handleChangeText = (text) => {
        console.log('handleChangeText fired')
        if (text.length) {
            // Text added. Focus next cell
            if (col < 4) {
                const target = globals.tileRefs[row][col+1]
                target.current.focus()
            }
        } else {
            // Text removed. Focus previous cell
            if (col > 0) {
                const target = globals.tileRefs[row][col-1]
                target.current.focus()
            }
        }

        setValue(text)
    }

    const handleKeyPress = (key) => {
        if (key.code == 'Backspace') {
            // If current tile is already empty, move back
            let value = globals.tileRefs[row][col].current.value
            if (!value.length && col > 0) {
                const target = globals.tileRefs[row][col-1]
                target.current.focus()
            }
        }
    }

    return (
        <View style={style.letterTile}>
            <TextInput
                ref={globals.tileRefs[row][col]}
                style={style.letterInput}
                maxLength={1}
                value={value.toUpperCase()}
                onChangeText={handleChangeText}
                onKeyPress={handleKeyPress}
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
