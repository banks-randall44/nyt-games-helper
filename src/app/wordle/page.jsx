"use client"

import { View, Text, TextInput } from 'react-native-web'
import WordGrid from './_components/WordGrid.jsx'
import Keyboard from './_components/Keyboard.jsx'
import style from './style.js'
import * as app from './app.js'
import * as server from './server.js'

const Page = () => {
    const handleKeyPress = (text) => {
        switch (text) {
            case 'Delete':
                app.deletePressed()
                break
            case 'Enter':
                app.enterPressed()
                break
            default:
                // Add letter to tile input
                let input = app.getFirstEmptyInput()
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
