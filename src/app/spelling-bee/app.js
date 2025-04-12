export function wordContains(word, letters) {
    let wordChars = new Set(word.toLowerCase())
    let lettersChars = new Set(letters.toLowerCase())
    return lettersChars.isSubsetOf(wordChars)
}

export function wordContainsOnly(word, letters) {
    let wordChars = new Set(word.toLowerCase())
    let lettersChars = new Set(letters.toLowerCase())
    for (const letter of wordChars) {
        if (!lettersChars.has(letter)) 
            return false
    }
    return true
}

export function isPangram(word, letters) {
    let wordChars = new Set(word.toLowerCase())
    let lettersChars = new Set(letters.toLowerCase())
    if (!wordChars.difference(lettersChars).size && !lettersChars.difference(wordChars).size)
        return true
    else
        return false
}

export function findMatches(words, letters, center) {
    let pangrams = []
    let allOthers = []
    for (var i = 0; i < words.length; i++) {
        let word = words[i];
        if (!wordContains(word, center)) continue

        if (isPangram(word, letters)) {
            pangrams.push(word)
            continue
        }
        if (wordContainsOnly(word, letters)) {
            if (word.length >= 4)
                allOthers.push(word)
        }
    }

    return {
        pangrams: pangrams,
        allOthers: allOthers
    }
}
