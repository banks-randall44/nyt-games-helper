import globals from './globals.js'

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

export const checkWord = (word) => {
    return {
        directHits: getDirectHits(word),
        indirectHits: getIndirectHits(word)
    }
}

export const getIndirectHits = (word) => {
    let target = globals.targetWord
    let targetSet = new Set(target)
    let hits = []
    for (let c = 0; c < word.length; c++) {
        if (!targetSet.has(word[c])) continue;

        if (word[c] != target[c]) {
            hits.push(c)
        }
    }

    return hits
}

export const getDirectHits = (word) => {
    let target = globals.targetWord
    let hits = []
    for (let c = 0; c < word.length; c++) {
        if (word[c] == target[c]) {
            hits.push(c)
        }
    }

    return hits
}

export const colorHits = (row,hits) => {
    let inputs = globals.tileRefs[row]
    for (let i = 0; i < inputs.length; i++) {
        if (hits.directHits.includes(i)) {
            let color = "rgb(0,150,0)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        }
        else if (hits.indirectHits.includes(i)) {
            let color = "rgb(200,200,0)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        } else {
            let color = "rgb(20,20,20)"

            // Color tile
            inputs[i].current.style.backgroundColor = color

            // Color key
            let char = inputs[i].current.value
            let key = globals.keyRefs[char].current
            key.style.backgroundColor = color
        }
    }
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
    if (wordList.includes(word.toLowerCase())) return true;
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

    let hits = checkWord(word)
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