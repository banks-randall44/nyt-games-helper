"use client"

import { View, Text, TextInput } from 'react-native-web'
import WordGrid from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'
import * as app from './app.js'
import * as server from './server.js'
import { useEffect } from 'react'
import globals from './globals.js'

const Page = () => {
    useEffect(() => {
        async function updateWordList() {
            globals.wordList = await server.getValidWordList()
        }
        async function updateTargetWord(wordList) {
            if (!globals.targetWord.length) {
                globals.targetWord = await server.getRandomTargetWord(wordList)
                console.log('targetWord:', globals.targetWord)
            }
        }

        updateWordList()
        updateTargetWord()
    },[])
    const handleKeyPress = (text) => {
        switch (text) {
            case 'Delete':
                app.deletePressed()
                break
            case 'Enter':
                app.enterPressed()
                break
            default:
                app.charPressed(text)
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
