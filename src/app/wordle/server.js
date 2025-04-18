"use server"

import { readFile } from 'fs/promises'

export async function readWordList() {
    return await readFile(
        process.cwd() + '/src/app/_resources/wordle-answers-alphabetical.txt', 
        'utf8'
    )
}

export async function getRandomTargetWord() {
    let wordList = await getValidWordList()
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
}

export async function getValidWordList() {
    let wordList = await readWordList()
    return wordList.split("\n")
}
