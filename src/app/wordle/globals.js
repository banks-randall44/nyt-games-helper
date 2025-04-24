let globals = {
    targetWord: 'SHUSH',
    wordList: [],
    currentRow: 0,
    directHits: new Set(),
    indirectHits: new Set(),
    misses: new Set(),
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
