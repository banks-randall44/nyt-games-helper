import { View, TextInput } from 'react-native-web'
import { useState, useRef } from 'react'
import style from '../style.js'
import globals from '../globals.js'
import { motion } from "motion/react"

// Tile Component
const LetterTile = ({ row, col }) => {
    let [value, setValue] = useState('')
    let [rotation, setRotation] = useState(0)

    globals.tileRefs[row][col] = useRef(null)

    const handleChangeText = (text) => {
        setValue(text)
    }

    return (
        <motion.div 
            style={style.letterTile} 
            animate={{ 
                rotate: rotation,
                transition: {
                    duration: 2
                }
            }}>
            <TextInput
                ref={globals.tileRefs[row][col]}
                style={style.letterInput}
                maxLength={1}
                value={value.toUpperCase()}
                onChangeText={handleChangeText}
            />
        </motion.div>
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
