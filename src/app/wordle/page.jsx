"use client"

import { React, useState } from 'react'
import { View, Text, TextInput } from 'react-native-web'
import { WordGrid, inputRefs } from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'

const getFirstEmptyInput = () =>  {
    for (let row = 0; row < inputRefs.length; row++) {
        for (let col = 0; col < inputRefs[row].length; col++) {
            let ref = inputRefs[row][col]
            if (!ref.current.value) {
                return ref.current
            }
        }
    }
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
}

const Page = () => {
    const handleKeyPress = (text) => {

        if (text == 'Delete') {
            // Delete the last letter
            let input = getLastFilledInput()
            input.value = ''
        } else if (text == 'Enter') {
            // Submit the current row
        } else {
            // Add letter to tile input
            let input = getFirstEmptyInput()
            input.value = text
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
