"use client"

import { React, useState } from 'react'
import { View, Text, TextInput } from 'react-native-web'
import WordGrid from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'

const Page = () => {
    const handleKeyPress = (text) => {
        console.log('Key pressed: ' + text)

        if (text == 'Delete') {
        } else if (text == 'Enter') {
        } else {
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
