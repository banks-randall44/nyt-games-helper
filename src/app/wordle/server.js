"use server"

import { readFile } from 'fs/promises'

export async function readWordList() {
    return await readFile(
        process.cwd() + '/src/app/_resources/wordle-answers-alphabetical.txt', 
        'utf8'
    )
}

export async function getRandomTargetWord() {
    let wordList = await readWordList()
    let words = wordList.split("\n")
    return words[Math.floor(Math.random() * words.length)]
}
