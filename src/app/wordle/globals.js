let globals = {
    targetWord: 'MUNCH',
    wordList: [],
    currentRow: 0,
    keyRefs: {},
    tileRefs: []
}

// initialize tilerefs
for (let r = 0; r < 6; r++) {
    globals.tileRefs[r] = []
    for (let c = 0; c < 5; c++) {
        globals.tileRefs[r][c] = null
    }
}

export default globals
