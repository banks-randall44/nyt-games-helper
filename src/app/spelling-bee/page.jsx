"use client"

import { React, useState } from 'react'
import { View, TouchableOpacity, Text, TextInput, FlatList } from 'react-native-web'
import { v4 } from "uuid"
import * as app from './app.js'
import * as server from './server.js'
import style from './style.js'
import words from 'an-array-of-english-words'

const ListItem = ({text}) => (
    <View style={style.listItem}>
        <Text style={style.listText}>{text}</Text>
    </View>
)

const Page = () => {
    const [centerText, centerOnChangeText] = useState('')
    const [lettersText, lettersOnChangeText] = useState('')

    let [pangrams, setPangrams] = useState([])
    let [allOthers, setAllOthers] = useState([])

    async function handleClick() {
        pangrams = []
        allOthers = []

        let file = await server.readWordList()

        // Fetch matches from txt file on the server
        //let matches = app.findMatches(file.split("\n"), lettersText, centerText)

        // Fetch matches from npm library
        let matches = app.findMatches(words, lettersText, centerText)

        for (var i = 0; i < matches.pangrams.length; i++) {
            let pangram = matches.pangrams[i]
            pangrams.push({
                id: v4(),
                text: pangram
            })
        }
        for (var i = 0; i < matches.allOthers.length; i++) {
            let word = matches.allOthers[i]
            allOthers.push({
                id: v4(),
                text: word 
            })
        }

        setPangrams([...pangrams])
        setAllOthers([...allOthers])
    }

    return (
        <View style={style.container}>
            <Text style={style.headerText}>Spelling Bee</Text>
            <View>
                <Text style={style.labelText}>Letters</Text>
                <TextInput 
                    style={style.input}
                    onChangeText={lettersOnChangeText}
                    value={lettersText}
                />
                <Text style={style.labelText}>Center</Text>
                <TextInput 
                    style={[style.input,style.inputCenter]}
                    onChangeText={centerOnChangeText}
                    value={centerText}
                />
            </View>
            <View>
                <TouchableOpacity onPress={handleClick} style={style.button}>
                    <Text style={style.buttonText}>Find Words</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={style.labelText}>Pangrams</Text>
                <View style={style.list}>
                    <FlatList
                        data={pangrams}
                        renderItem={({item}) => 
                            <ListItem style={style.listText} text={item.text} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Text style={style.labelText}>All other valid words</Text>
                <View style={[style.list,style.listAllOthers]}>
                    <FlatList
                        data={allOthers}
                        renderItem={({item}) => 
                            <ListItem style={style.listText} text={item.text} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default Page
