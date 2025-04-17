"use client"

import { React, useState } from 'react'
import { View, Text, TextInput } from 'react-native-web'
import { WordGrid, inputRefs } from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'
import globals from './globals.js'

const TARGET_WORD = 'RANDY'

const getFirstEmptyInput = () =>  {
    for (let row = 0; row < inputRefs.length; row++) {
        for (let col = 0; col < inputRefs[row].length; col++) {
            let ref = inputRefs[row][col]
            if (!ref.current.value) {
                return ref.current
            }
        }
    }

    return null
}

const getLastFilledInput = () =>  {
    for (let row = (inputRefs.length - 1); row >= 0; row--) {
        for (let col = (inputRefs[row].length - 1); col >= 0; col--) {
            let ref = inputRefs[row][col]
            if (ref.current.value) {
                return ref.current
            }
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

const colorGridTiles = (row,hits) => {
    let inputs = inputRefs[row]
    for (let i = 0; i < inputs.length; i++) {
        if (hits.directHits.includes(i)) {
            inputs[i].current.style.backgroundColor = "rgb(0,150,0)"
        }
        else if (hits.indirectHits.includes(i)) {
            inputs[i].current.style.backgroundColor = "rgb(200,200,0)"
        } else {
            inputs[i].current.style.backgroundColor = "rgb(20,20,20)"
        }
    }
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
            let hits = checkWord(word)
            colorGridTiles(globals.currentRow,hits)
            globals.currentRow++

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
