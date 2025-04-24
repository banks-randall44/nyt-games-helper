import globals from './globals.js'
import words from 'an-array-of-english-words'

export const getAllFiveLetterWordsFromModule = () => {
    let fiveLetterWords = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].length == 5) fiveLetterWords.push(words[i])
    }

    return fiveLetterWords
}

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
    let indirectHits = getIndirectHits(word,target,directHits);
    return {
        direct: directHits,
        indirect: indirectHits
    }
}

export const getMisses = (word,hits) => {
    let dhIndicies = hits.direct.indicies
    let ihIndicies = hits.indirect.indicies
    let missedIndicies = []
    let missedLetters = []
    for (let i = 0; i < 5; i++) {
        if (!dhIndicies.includes(i) && !ihIndicies.includes(i)) {
            missedIndicies.push(i)
            missedLetters.push(word[i])
        }
    }

    return {
        indicies: missedIndicies,
        letters: missedLetters
    }
}

export const getIndirectHits = (word,target,directHits) => {
    let targetSet = new Set(target)
    let hitIndicies = []
    let hitLetters = []
    let directHitLetters = [...directHits.letters]
    let targetRef = globals.targetWord
    for (let i = 0; i < word.length; i++) {
        // Letter is not in the target word
        if (!targetSet.has(word[i])) continue;

        //  Letter is in the word, but not at this position
        if (word[i] != target[i]) {

            let numCharsTarget = getNumCharsInWord(word[i],targetRef)
            let numCharsDirectHits = getNumCharsInWord(word[i],directHitLetters.join(""))
            let numCharsIndirectHits = getNumCharsInWord(word[i],hitLetters.join(""))
            
            // Letter is in word but not been directly hit yet
            if (!directHitLetters.includes(word[i])) { 
                if (numCharsIndirectHits <= numCharsDirectHits) {
                    hitIndicies.push(i)
                    hitLetters.push(word[i])    
                }
            } else { // Letter is in the word and has not been directly hit

                // If there are more instances of this letter in the target word than
                // have been directly hit so far, then mark it yellow (see (2) above)
                if (numCharsTarget > numCharsDirectHits) { 
                    if (numCharsIndirectHits <= numCharsDirectHits) {
                        hitIndicies.push(i)
                        hitLetters.push(word[i])    
                        targetRef = targetRef.replace(word[i],'')
                        globals.indirectHits.add(word[i])
                    }
                }
            }
        }
    }

    return {
        indicies: hitIndicies,
        letters: hitLetters
    }
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

export const getNumCharsInWord = (char,word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) count++
    }

    return count
}

export const wordContainsLetters = (word,letters) => {
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        if (word.includes(letter)) {
            word = word.replace(letter,"")
        } else {
            return false
        }
    }

    return true
}

export const calculateWordsRemaining = () => {
    let words = [...globals.wordList]
    for (let row = 0; row < globals.currentRow; row++) {
        let guess = getWordFromRow(row)
        let hits = getHits(guess,globals.targetWord)
        let misses = getMisses(guess,hits)

        // If all letters are hit, there's 0 words remaining
        if (hits.direct.indicies.length == 5) return []

        // Remove all words that can no longer be valid
        for (let i = words.length - 1; i >= 0; i--) {
            let word = words[i].toUpperCase()

            // If this word doesn't contain all of the hits, it can't be a match
            let allHits = []
            allHits = allHits.concat(hits.direct.letters,hits.indirect.letters)            
            if (!wordContainsLetters(word,allHits)) { 
                words.splice(i,1)
                continue
            }

            for (let j = 0; j < word.length; j++) {
                // If guess has a direct hit at this idx and it doesnt match,
                // this word cannot be valid
                if (hits.direct.indicies.includes(j) && (word[j] != guess[j])) {
                    //console.log(word+' cannot be valid due to direct hit at idx '+j)
                    words.splice(i,1)
                    break
                }

                // If guess has an indirect hit at this index and it does match,
                // this word cannot be valid
                if (hits.indirect.indicies.includes(j) && (word[j] === guess[j])) {
                    //console.log(word+' cannot be valid due to indirect hit at idx '+j)
                    words.splice(i,1)
                    break
                }

                // If guess has an miss at this index and it does match,
                // this word cannot be valid
                if (misses.indicies.includes(j) && (word[j] === guess[j])) {
                    //console.log(word+' cannot be valid due to miss at idx '+j)
                    words.splice(i,1)
                    break
                }

                // If this word has a letter at this index that is a miss at any index
                // in guess and if that letter is not in any of the hits, it cant be valid
                if (misses.letters.includes(word[j])) {
                    if (!hits.indirect.letters.includes(word[j]) 
                        && !hits.direct.letters.includes(word[j])) {
                        words.splice(i,1)
                        break
                    }
                }
            }
        }
    }

    console.log('words remaining: ',words)
    return words
}

export const colorHits = (row,hits) => {
    const colors = {
        miss: "rgb(20,20,20)",
        hitDirect: "rgb(0,150,0)",
        hitIndirect: "rgb(200,200,0)"
    }
    let inputs = globals.tileRefs[row]
    for (let i = 0; i < inputs.length; i++) {
        if (hits.direct.indicies.includes(i)) {
            let color = colors.hitDirect

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
            
            globals.directHits.add(char)
        }
        else if (hits.indirect.indicies.includes(i)) {
            let color = colors.hitIndirect

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
            
            globals.indirectHits.add(char)
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

            globals.misses.add(char)
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

    // Color tiles and keyboard keys
    let hits = getHits(word,globals.targetWord)
    console.log('hits:',hits)
    colorHits(globals.currentRow,hits)

    // Check if won
    if (hits.direct.indicies.length == 5) {
        gameOver('win')
        return
    }

    // Check if lost
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
    //if (input) input.value = text

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value').set;
    nativeInputValueSetter.call(input, text);
    const event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
}