import * as app from '../app.js'

let target = 'MATCH'
let word = 'HATCH'
let hits = app.getHits(word,target)

if (hits.directHits.indicies != [1,2,3,4]) {
    console.error('DIRECT HITS TEST FAILED!')
}

if (hits.indirectHits != []) {
    console.error('INDIRECT HITS TEST FAILED!')
}