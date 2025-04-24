"use client"

import { View, Text } from 'react-native-web'
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
            // List of official wordle answers
            //globals.wordList = await server.getValidWordList()

            // NPM Repo contains all of the official wordle words + a lot more
            globals.wordList = app.getAllFiveLetterWordsFromModule()

            let numValidWords = globals.wordList.length
            setWordsRemaining(numValidWords)
        }
        async function updateTargetWord() {
            if (!globals.targetWord.length) {
                // Answers only come from official list of wordle answers
                globals.targetWord = await server.getRandomTargetWord()
                console.log('targetWord:', globals.targetWord)
            }
        }

        updateWordList()
        updateTargetWord()

        document.addEventListener('keydown',handlePhysicalKeyPress)
    },[])

    // Physical keyboard keypress handler
    const handlePhysicalKeyPress = (key) => {
        switch (key.code) {
            case 'Enter':
                app.enterPressed()
                break;
            case 'Backspace':
                app.deletePressed()
                break;
            default:
                app.charPressed(key.key.toUpperCase())
        }
    }


    // Virtual keyboard keypress handler
    const handleVirtualKeyPress = (text) => {
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
            <Text style={style.wordsRemaining}>
                Possible words remaining: {wordsRemaining}
            </Text>
            <Keyboard 
                onKeyPress={handleVirtualKeyPress}
            />
        </View>
    )
}

export default Page
