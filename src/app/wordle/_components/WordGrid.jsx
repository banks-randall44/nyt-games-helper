import { View, Text, TextInput } from 'react-native-web'
import style from '../style.js'

// Tile Component
const LetterTile = ({value}) => (
    <View style={style.letterTile}>
        <TextInput
            style={style.letterInput}
            maxLength={1}
            value={value}
        />
    </View>
)
let tiles = []
for (var i = 0; i < 5; i++) tiles.push(<LetterTile value={''} key={i} />)

// Word entry component
const WordEntry = () => (
    <View style={style.wordEntry}>
        {tiles}
    </View>
)
let wordEntries = []
for (var i = 0; i < 6; i++) wordEntries.push(<WordEntry key={i} />)

// Word grid component
const WordGrid = () => (
    <View style={style.gridContainer}>
        {wordEntries}
    </View>
)

export default WordGrid
