import { createLocalRequestContext } from 'next/dist/server/after/builtin-request-context.js'
import globals from './globals.js'
import words from 'an-array-of-english-words'

export const getFirstEmptyInput = () =>  {
    let row = globals.currentRow
    for (let col = 0; col < globals.tileRefs[row].length; col++) {
        let ref = globals.tileRefs[row][col]
        if (!ref.current.value) {
            return ref.current
        }
    }

    return null
}

export const getLastFilledInput = () =>  {
    let row = globals.currentRow
    for (let col = (globals.tileRefs[row].length - 1); col >= 0; col--) {
        let ref = globals.tileRefs[row][col]
        if (ref.current.value) {
            return ref.current
        }
    }

    return null
}

export const getWordFromRow = (row) => {
    let inputs = globals.tileRefs[row]
    let word = ''
    for (let i = 0; i < inputs.length; i++) {
        word += inputs[i].current.value
    }
    return word
}

export const getHits = (word,target) => {
    let directHits = getDirectHits(word,target)
    return {
        directHits: directHits,
        indirectHits: getIndirectHits(word,target,directHits)
    }
}

export const getIndirectHits = (word,target,directHits) => {
    let targetSet = new Set(target)
    let hits = []
    let directHitLetters = [...directHits.letters]
    let targetRef = globals.targetWord
    for (let i = 0; i < word.length; i++) {
        // Letter is not in the target word
        if (!targetSet.has(word[i])) continue;

        if (word[i] != target[i]) {
            //  Letter is in the word, but not at this position
            //  There are now 3 scenarios:
            //      1) Letter is not in directHits
            //          color letter yellow
            //      2) Letter is in directHits, but there is at least one more unhit instance
            //          color letter yellow
            //          decrement unhit count (remove char from targetRef)
            //      3) letter is in directHits, and all instances of letter have already been hit
            //          color letter black (dont mark as hit)

            if (!directHitLetters.includes(word[i])) { // 1
                hits.push(i)
            } else {
                let numCharsTarget = getNumCharsInWord(word[i],targetRef)
                let numCharsDirectHits = getNumCharsInWord(word[i],directHitLetters.join(""))

                if (numCharsTarget  > numCharsDirectHits) { // 2
                    hits.push(i)
                    targetRef = targetRef.replace(word[i],'')
                } else { // 3
                    continue
                }
            }
        }
    }

    return hits
}

export const getNumCharsInWord = (char,word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) count++
    }

    return count
}

export const getDirectHits = (word,target) => {
    let hitIndicies = []
    let hitLetters = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == target[i]) {
            hitIndicies.push(i)
            hitLetters.push(word[i])
        }
    }

    return {
        indicies: hitIndicies,
        letters: hitLetters
    }
}

export const colorHits = (row,hits) => {
    const colors = {
        miss: "rgb(20,20,20)",
        hitDirect: "rgb(0,150,0)",
        hitIndirect: "rgb(200,200,0)"
    }
    let inputs = globals.tileRefs[row]
    for (let i = 0; i < inputs.length; i++) {
        console.log('Checking letter ' + inputs[i].current.value)
        if (hits.directHits.indicies.includes(i)) {
            let color = colors.hitDirect

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        }
        else if (hits.indirectHits.includes(i)) {
            let color = colors.hitIndirect

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        } else {
            let color = colors.miss
            
            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current

            // Dont override hits
            let currentColor = key.style.backgroundColor
            let currentRGB = getRGBFromStr(currentColor)
            let dHitRGB = getRGBFromStr(colors['hitDirect'])
            let iHitRGB = getRGBFromStr(colors['hitIndirect'])
            if (arraysEqual(currentRGB, dHitRGB) || arraysEqual(currentRGB, iHitRGB)) {
                console.log('Colored key detected')
                continue
            }

            key.style.backgroundColor = color
        }
    }
}

export const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export const getRGBFromStr = (rgbStr) => {
    return rgbStr.substring(4, rgbStr.length-1)
         .replace(/ /g, '')
         .split(',');
}

export const gameOver = (condition) => {
    let confirm;
    switch (condition) {
        case 'loss':
            confirm = window.confirm(
                'Game over. The word was: ' + globals.targetWord + '. Try again?'
            )
            if (confirm) window.location.reload()
            break
        case 'win':
            confirm = window.confirm('Great job! Play again?')
            if (confirm) window.location.reload()
            break
    }
}

export const isValidWord = (word) => {
    let wordList = globals.wordList

    // Check if its the target word
    if (word == globals.targetWord) return true

    // Check list of target words
    if (wordList.includes(word.toLowerCase())) return true

    // Check npm words repo
    if (words.includes(word.toLowerCase())) return true

    return false
}

export const enterPressed = () => {
    // Submit the current row
    let word = getWordFromRow(globals.currentRow)
    if (word.length < 5) return

    if (!isValidWord(word)) {
        window.alert('Invalid Word')
        return
    }

    let hits = getHits(word,globals.targetWord)
    colorHits(globals.currentRow,hits)
    if (hits.directHits.length == 5) {
        gameOver('win')
        return
    }

    globals.currentRow++
    if (globals.currentRow == 6) {
        gameOver('loss')
        return
    }
}

export const deletePressed = () => {
    // Delete the last letter
    let input = getLastFilledInput()
    if (input) input.value = ''
}

export const charPressed = (text) => {
    // Add letter to tile input
    let input = getFirstEmptyInput()
    if (input) input.value = text
}