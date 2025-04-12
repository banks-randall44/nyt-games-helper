"use server"

import { readFile } from 'fs/promises'

export async function readWordList() {
    return await readFile(process.cwd() + '/_resources/words.txt', 'utf8')
    
}

export async function testServerFunc() {
    return 'testServerFunc returned'
}
