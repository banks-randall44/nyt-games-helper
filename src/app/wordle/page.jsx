"use client"

import { View, Text, TextInput } from 'react-native-web'
import WordGrid from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'
import * as app from './app.js'
import * as server from './server.js'
import { useEffect, useState } from 'react'
import globals from './globals.js'

const Page = () => {
    const [wordsRemaining, setWordsRemaining] = useState(0)

    // Fires once on page load
    useEffect(() => {
        async function updateWordList() {
            //globals.wordList = await server.getValidWordList()
            globals.wordList = app.getAllFiveLetterWordsFromModule()
            let numValidWords = globals.wordList.length
            setWordsRemaining(numValidWords)
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
                setWordsRemaining(app.calculateWordsRemaining().length)
                break
            default:
                app.charPressed(text)
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.headerText}>Wordle</Text>
            <WordGrid />
            <Text style={style.wordsRemaining}>Words remaining: {wordsRemaining}</Text>
            <Keyboard 
                onKeyPress={handleKeyPress}
            />
        </View>
    )
}

export default Page
