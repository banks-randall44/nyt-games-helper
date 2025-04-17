"use client"

import { React, useState } from 'react'
import { View, Text, TextInput } from 'react-native-web'
import { WordGrid, inputRefs } from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'
import globals from './globals.js'

const TARGET_WORD = 'RANDY'

const getFirstEmptyInput = () =>  {
    let row = globals.currentRow
    for (let col = 0; col < inputRefs[row].length; col++) {
        let ref = inputRefs[row][col]
        if (!ref.current.value) {
            return ref.current
        }
    }

    return null
}

const getLastFilledInput = () =>  {
    let row = globals.currentRow
    for (let col = (inputRefs[row].length - 1); col >= 0; col--) {
        let ref = inputRefs[row][col]
        if (ref.current.value) {
            return ref.current
        }
    }

    return null
}

const getWordFromRow = (row) => {
    let inputs = inputRefs[row]
    let word = ''
    for (let i = 0; i < inputs.length; i++) {
        word += inputs[i].current.value
    }
    return word
}

const checkWord = (word) => {
    return {
        directHits: getDirectHits(word),
        indirectHits: getIndirectHits(word)
    }
}

const getIndirectHits = (word) => {
    let target = globals.targetWord
    let targetSet = new Set(target)
    let hits = []
    for (let c = 0; c < word.length; c++) {
        if (!targetSet.has(word[c])) continue;

        if (word[c] != target[c]) {
            hits.push(c)
        }
    }

    return hits
}

const getDirectHits = (word) => {
    let target = globals.targetWord
    let hits = []
    for (let c = 0; c < word.length; c++) {
        if (word[c] == target[c]) {
            hits.push(c)
        }
    }

    return hits
}

const colorHits = (row,hits) => {
    let inputs = inputRefs[row]
    for (let i = 0; i < inputs.length; i++) {
        if (hits.directHits.includes(i)) {
            let color = "rgb(0,150,0)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        }
        else if (hits.indirectHits.includes(i)) {
            let color = "rgb(200,200,0)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        } else {
            let color = "rgb(20,20,20)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        }
    }
}

const gameOver = () => {
    window.alert('Game over. Tough luck, buddy')
}

const Page = () => {
    const handleKeyPress = (text) => {

        
        if (text == 'Delete') {
            // Delete the last letter
            let input = getLastFilledInput()
            if (input) input.value = ''

        } else if (text == 'Enter') {
            // Submit the current row
            let word = getWordFromRow(globals.currentRow)
            if (word.length < 5) return

            let hits = checkWord(word)
            colorHits(globals.currentRow,hits)

            globals.currentRow++
            if (globals.currentRow == 6) gameOver()

        } else {
            // Add letter to tile input
            let input = getFirstEmptyInput()
            if (input) input.value = text
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.headerText}>Wordle</Text>
            <WordGrid />
            <Keyboard 
                onKeyPress={handleKeyPress}
            />
        </View>
    )
}

export default Page
